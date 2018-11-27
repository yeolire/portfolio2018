module.exports={
  html: function(contents){
    return `<!DOCTYPE html>
    <html lang="ko">

    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
      <title>남산서울타워</title>
      <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css">
      <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
      <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.3/umd/popper.min.js"></script>
      <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.1.3/js/bootstrap.min.js"></script>
      <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.5.0/css/all.css" integrity="sha384-B4dIYHKNBt8Bc12p+WXckhzcICo0wtJAoU8YZTY5qE0Id1GSseTk6S+L3BlXeVIU" crossorigin="anonymous">
      <link rel="stylesheet" href="css/style.css">
    </head>

    <body>
      <!-- Header image -->
      <div class="header-img container-fluid">
        <div class="container h-100 p-5">
          <h1 class="display-3">서울 남산 타워</h1>
          <p class="lead">서울의 중심에서 만나는 특별한 순간</p>
        </div>
      </div>

      <!-- Navigation -->
      <nav id="nav" class="navbar justify-content-between sticky-top navbar-expand-lg navbar-dark">
        <div class="container">
          <a class="navbar-brand" href="/"><img width="120" src="img/main_title_logo.png" alt="logo"></a>

          <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbar-toggle" aria-controls="navbar-toggle" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>

          <div class="collapse navbar-collapse" id="navbar-toggle">
            <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
              <li class="nav-item">
                <div class="dropdown">
                  <a class="nav-link" href="#" data-toggle="dropdown" role="button" id="intro">남산서울타워 <span class="sr-only">(current)</span></a>
                  <div class="dropdown-menu" aria-labelledby="intro">
                    <a href="/?id=history" class="dropdown-item">역사</a>
                    <a href="/?id=brand" class="dropdown-item">브랜드 스토리</a>
                    <a href="/" class="dropdown-item disabled">세계의 타워</a>
                    <a href="/" class="dropdown-item disabled">공지사항</a>
                    <a href="/" class="dropdown-item disabled">대관안내</a>
                    <a href="/" class="dropdown-item disabled">이벤트</a>
                  </div>
                </div>
              </li>
              <li class="nav-item">
                <div class="dropdown">
                  <a class="nav-link" href="/" data-toggle="dropdown" role="button" id="course">남산 추천코스</a>
                  <div class="dropdown-menu" aria-labelledby="course">
                    <a href="/?id=recommend" class="dropdown-item">추천코스</a>
                    <a href="/?id=theme" class="dropdown-item">테마코스</a>
                    <a href="/?id=photozone" class="dropdown-item">포토존</a>
                    <a href="/?id=inside" class="dropdown-item">타워 인사이드</a>
                    <a href="/?id=attraction" class="dropdown-item">남산 관광명소</a>
                  </div>
                </div>
              </li>
              <li class="nav-item">
                <div class="dropdown">
                  <a class="nav-link" href="/" data-toggle="dropdown" role="button" id="store">스토어</a>
                  <div class="dropdown-menu" aria-labelledby="store">
                    <a href="/?id=store" class="dropdown-item">층별 안내</a>
                    <a href="/?id=plaza" class="dropdown-item">서울타워플라자</a>
                    <a href="http://www.nseoultower.co.kr/visit/restaurant.asp" class="dropdown-item">N서울타워</a>
                    <a href="/" class="dropdown-item disabled">쿠폰</a>
                  </div>
                </div>
              </li>
              <li class="nav-item">
                <div class="dropdown">
                  <a class="nav-link" href="/" data-toggle="dropdown" role="button" id="media">미디어 센터</a>
                  <div class="dropdown-menu" aria-labelledby="media">
                    <a href="/?id=live" class="dropdown-item">Live 서울</a>
                    <a href="/" class="dropdown-item disabled">뉴스센터</a>
                    <a href="/" class="dropdown-item disabled">미디어</a>
                    <a href="/" class="dropdown-item disabled">갤러리</a>
                  </div>
                </div>
              </li>
              <li class="nav-item">
                <div class="dropdown">
                  <a class="nav-link" href="/" data-toggle="dropdown" role="button" id="visit">오시는 길</a>
                  <div class="dropdown-menu" aria-labelledby="visit">
                    <a href="/?id=visit" class="dropdown-item">도보 이용 안내</a>
                    <a href="/?id=cablecar" class="dropdown-item">케이블카 이용 안내</a>
                    <a href="/?id=transfer" class="dropdown-item">대중교통 이용 안내</a>
                    <a href="/?id=parking" class="dropdown-item">주차장 이용 안내</a>
                  </div>
                </div>
              </li>
            </ul>
            <span class="navbar-text" style="font-size: 1.5rem;">
              <a href="https://www.instagram.com/namsanseoultower/"><i class="fab fa-instagram"><span class="text-hide">instagram</span></i>
              </a>
              <a class="ml-2" href="http://www.facebook.co/%EB%82%A8%EC%82%B0%EC%84%9C%EC%9A%B8%ED%83%80%EC%9B%8C-150084848911362"><i class="fab fa-facebook"><span class="text-hide">facebook</span></i></a>
            </span>
          </div>
        </div>
      </nav>


      <!-- contents -->
      <main id="content" class="container-fluid p-0">

      ${contents}

      </main>


      <!-- footer -->
      <footer id="footer" class="bg-dark container-fluid p-3">
        <div class="container">
          <section class="row flcenter">
            <div class="footer-logo col-lg-4 p-3"><img src="img/footer_logo.png" alt="남산남산타워" width="100%"></div>
            <div class="footer-copyright col-lg-8 p-3">
              <p>04340 서울특별시 용산구 남산공원길 105 남산서울타워</p>
              <p><span>대표자: 정찬형</span>
                <span>팩스: 02-756-2486</span>
                <span>사업자등록번호: 102-81-32883</span></p>
              <p><span>마케팅·홍보촬영 문의: jkkim0917@ytn.co.kr</span></p>
              <p><span>COPYRIGHT© NAMSAN SEOUL TOWER, ALL RIGHTS RESERVED.</span></p>
              <p>이 페이지는 포트폴리오용으로 작성되었습니다.</p>
            </div>
          </section>
        </div>
      </footer>
    </body>

    </html>`
  }
}
