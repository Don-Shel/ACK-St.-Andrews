import axios from 'axios';

export type YouTubeVideoType = {
  id: string;
  title: string;
  description: string;
  publishedAt: string;
  thumbnailUrl: string;
  viewCount: string;
  likeCount: string;
  duration: string;
};

const YOUTUBE_API_KEY = process.env.NEXT_PUBLIC_YOUTUBE_API_KEY;
const CHANNEL_ID = process.env.NEXT_PUBLIC_YOUTUBE_CHANNEL_ID;

export async function getChannelVideos(pageToken?: string) {
  try {
    if (!YOUTUBE_API_KEY || !CHANNEL_ID) {
      throw new Error('YouTube API key or Channel ID not configured');
    }

    // First, get video IDs and basic info
    const searchResponse = await axios.get('https://www.googleapis.com/youtube/v3/search', {
      params: {
        key: YOUTUBE_API_KEY,
        channelId: CHANNEL_ID,
        part: 'snippet',
        order: 'date',
        maxResults: 6,
        type: 'video',
        pageToken: pageToken || undefined
      }
    });

    // Get detailed video statistics
    const videoIds = searchResponse.data.items.map((item: any) => item.id.videoId).join(',');
    const videoDetailsResponse = await axios.get('https://www.googleapis.com/youtube/v3/videos', {
      params: {
        key: YOUTUBE_API_KEY,
        id: videoIds,
        part: 'statistics,contentDetails'
      }
    });

    // Combine the data
    const videos: YouTubeVideoType[] = searchResponse.data.items.map((item: any) => {
      const videoDetails = videoDetailsResponse.data.items.find(
        (v: any) => v.id === item.id.videoId
      );
      
      const formatDuration = (duration: string) => {
        const match = duration.match(/PT(\d+H)?(\d+M)?(\d+S)?/) || [];
        const hours = (match[1] || '').replace('H', '');
        const minutes = (match[2] || '').replace('M', '');
        const seconds = (match[3] || '').replace('S', '');
        
        if (hours) {
          return `${hours}:${minutes.padStart(2, '0')}:${seconds.padStart(2, '0')}`;
        }
        return `${minutes || '0'}:${seconds.padStart(2, '0')}`;
      };

      const formatCount = (count: string) => {
        const num = parseInt(count);
        if (num >= 1000000) {
          return (num / 1000000).toFixed(1) + 'M';
        }
        if (num >= 1000) {
          return (num / 1000).toFixed(1) + 'K';
        }
        return num.toString();
      };

      return {
        id: item.id.videoId,
        title: item.snippet.title,
        description: item.snippet.description,
        publishedAt: item.snippet.publishedAt,
        thumbnailUrl: item.snippet.thumbnails.high.url,
        viewCount: formatCount(videoDetails?.statistics?.viewCount || '0'),
        likeCount: formatCount(videoDetails?.statistics?.likeCount || '0'),
        duration: formatDuration(videoDetails?.contentDetails?.duration || 'PT0M0S')
      };
    });

    return {
      videos,
      nextPageToken: searchResponse.data.nextPageToken || null
    };
  } catch (error) {
    console.error('Error fetching YouTube videos:', error);
    return {
      videos: [],
      nextPageToken: null
    };
  }
}