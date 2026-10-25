import type { Metadata } from 'next';
import './globals.css';
import './evidence-stories.css';
import './kt-is.css';

export const metadata: Metadata = {
  metadataBase: new URL('https://kt.dahyeon.kr'),
  title: '유다현 포트폴리오 | kt is IT개발',
  description: '검색 API, AI 연동, 실시간 상태 처리 경험을 담은 유다현의 kt is IT개발 포트폴리오',
  openGraph: { title: '유다현 | kt is IT개발 포트폴리오', description: '찾는 시간을 줄이고, 찾은 정보를 바로 쓰게 만드는 개발자', images: ['/assets/kt-is-share.svg'] },
  twitter: { card: 'summary_large_image', images: ['/assets/kt-is-share.svg'] },
  icons: { icon: '/favicon.png' },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="ko"><body>{children}</body></html>;
}
