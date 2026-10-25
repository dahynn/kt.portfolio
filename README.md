# 유다현 · kt is IT개발 포트폴리오

kt is IT개발 지원용 웹 포트폴리오입니다. SAN 검색·AI 연동, Roundy 실시간 매칭, CapSure 결제·계약 처리, 다시봄 모바일 프로젝트를 담았습니다.

## 로컬 실행

Node.js 22.13 이상을 사용합니다.

```sh
npm ci
npm run build:pages
python3 -m http.server 3057 --bind 127.0.0.1 --directory dist/client
```

http://localhost:3057 에서 확인합니다. 개발 시에는 `PORTFOLIO_PAGES=true npm run dev -- --host 127.0.0.1 --port 3057`을 사용할 수 있습니다.

## 도메인

- 예정 도메인: `kt.dahyeon.kr`
- DNS CNAME: `kt` → `dahynn.github.io.` (TTL 600)
- `public/CNAME` 포함. DNS만으로 게시되지는 않으며 GitHub Pages 연결과 배포가 별도로 필요합니다.
- `.github/workflows/ci.yml`은 main 브랜치에 푸시하면 검사·정적 빌드 후 GitHub Pages에 배포합니다.

## 자산 및 내용

- 표지 로고와 파비콘: 사용자가 제공한 원본 PNG
- CI 기준: https://www.ktis.co.kr/CI — #ED1C24, #000000
- 프로젝트 이미지·기술별 고유색은 유지합니다.
- SAN 성능은 2026-09-28 로컬 합성 1만 건 비교 결과이며 실제 운영 성능이 아닙니다.
- 개인 지원용 포트폴리오이며 kt is 공식 사이트가 아닙니다.
- 글꼴 라이선스는 `public/assets/fonts/`의 라이선스 파일을 따릅니다.
- 제목용 서체는 KT Y 브랜드가 공개 배포한 ‘Y 너만을 비춤체’입니다. 표지·섹션 제목·활동명·프로젝트명·문제 제목에 적용하며 본문은 Pretendard를 유지합니다. kt is의 기업 표준 서체를 의미하지 않습니다.
