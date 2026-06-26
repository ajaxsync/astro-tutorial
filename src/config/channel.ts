export const channelConfig = {
  name: '科技前沿',
  username: 'tech_frontier',
  description: '分享最新科技资讯和技术干货',
  subscribers: 12500,
  telegramUrl: 'https://t.me/tech_frontier',
  githubUrl: 'https://github.com/ajaxsync',
} as const;

export function formatCount(count: number): string {
  if (count >= 1_000_000) return `${(count / 1_000_000).toFixed(1)}M`;
  if (count >= 1000) return `${(count / 1000).toFixed(1)}K`;
  return count.toString();
}
