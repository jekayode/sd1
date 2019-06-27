<?php session_start(); // place it on the top of the script ?>
<!DOCTYPE html>
<html lang="en" dir="ltr">

<head>
  <!-- Basic Page Needs-->
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1">
  <!-- Website Title in The Browser Toolbar-->
  <title>syncedayone</title>
  <!-- Website Favicon Icon
  <link rel="icon" href="images/ain-icon.png"> -->
  <!-- Google Fonts-->
  <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Poppins:200,400,500%7CCourgette">
  <!-- Normalize Css File-->
  <link rel="stylesheet" href="css/normalize.css">
  <!-- Font Awesome Css File-->
  <link rel="stylesheet" href="css/font-awesome.min.css">
  <!-- Magnific Popup Plugin Css File-->
  <link rel="stylesheet" href="css/magnific-popup.css">
  <!-- Owl Carousel Css Files-->
  <link rel="stylesheet" href="css/owl.carousel.min.css">
  <link rel="stylesheet" href="css/owl.theme.default.min.css">
  <!-- Website Style File-->
  <link rel="stylesheet" href="css/style-ltr.css">
</head>

<body>
  <!-- Start Preloader-->
  <div class="preloader">
    <div class="spinner">
      <div class="double-bounce1"></div>
      <div class="double-bounce2"></div>
    </div>
  </div>
  <!-- End Preloader-->
  <!-- Start Header-->
  <header class="home section" id="home">
    <nav>
      <div class="container">
        <h1 class="logo"><a href="index.html">synceday<span>one</span>

          </a>

        </h1>
        <div class="menu-overlay"></div>
        <div class="nav-menu-container">
          <ul class="nav-menu">
            <li class="menu-item"><a class="active" href="index.html#" data-value="#home">Home</a>
            </li>
            <li class="menu-item"><a href="index.html#" data-value="#about">Digital audit</a>
            </li>
            <li class="menu-item"><a href="index.html#" data-value="#services">Matrix</a>
            </li>
            <li class="menu-item"><a href="index.html#" data-value="#portfolio">Media Buying</a>
            </li>

            <li class="menu-item"><a href="index.html#" data-value="#blog">Resources</a>
            </li>

            <li class="menu-item"><a href="index.html#" data-value="#pricing">No Mediocre</a>
            </li>


          </ul>
        </div>

      </div>
    </nav>
    <!-- Start Header Content-->
    <div class="header-content">
      <div class="container half-height">
        <div class="content-text">
          <h2>SD1 is a boutique marketing agency</h2>
          <p>We offer cutting-edge integrated marketing services that's driven by data analytics and
            tech, to clients across various sectors. Our services include</p>
          <div class="buttons-container"><a class="rounded-btn color-one solid shadow" href="index.html#">Learn More</a>
          </div>
        </div>
        <div class="content-img"><img src="images/undraw_work_time_lhoj.svg" alt=""></div>
      </div>
    </div>
    <!-- End Header Content-->
  </header>
  <!-- End Header-->
  <!-- Start Audit-->
  <div class="about section" id="about" style="background-color: #F5F4F5;">
    <div class="container">

      <!-- About Content-->
      <div class="who-are-we">
        <div class="who-are-we-img"><img src="images/services/audit.svg" alt=""></div>
        <div class="who-are-we-text">
          <h2>SD1 Digital audit</h2>
          <p>Gleen insight into how to leverage digital for realizing your
            branding and marketing objectives.</p>
          <div class="buttons-container"><a class="rounded-btn color-one shadow" href="about.html">Learn More</a>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- End About-->

  <!-- Start Matrix-->
  <div class="about section" id="about">
    <div class="container">

      <!-- About Content-->
      <div class="who-are-we">

        <div class="who-are-we-text">
          <h2>SD1 Matrix</h2>
          <p>For effective marketing communication, it's important to build a quality brand. Be deliberate with your
            brand building
            efforts by using this guide to develop the various elements of your brand.
          </p>
          <div class="buttons-container"><a class="rounded-btn color-one shadow" href="about.html">Learn More</a>
          </div>
        </div>
        <div class="who-are-we-img"><img src="images/services/audit.svg" alt=""></div>
      </div>
    </div>
  </div>
  <!-- End About-->

  <!-- Start Contact Box-->
  <div class="contact-box section">
    <div class="container">
      <div class="box">
        <h2 class="box-title">SD1 Resources </h2>
        <p>For DIY marketing efforts, here are some resources to help build a formidable brand and marketing campaign
        </p>

        <select id="resources">
          <option value="https://google.com">Resources 1</option>
          <option value="https://amazon.com">Resources 2</option>
          <option value="">Resources 3</option>
          <option value="">Resources 4</option>
          <option value="">Resources 5</option>
        </select>
        <div class="buttons-container">
          <button id="go" onclick="gotosite()" class="rounded-btn color-one" onclick="gotosite()">Go</button>
        </div>
      </div>
    </div>
  </div>
  <!-- End Contact Box-->

  <!-- Start Contact-->
  <div class="contact section" id="contact" style="background-color: #F5F4F5;">
    <div class=" container">
      <div class="section-title">
        <h2 data-title="">No Mediocre!</h2>
        <p>Sign up to our monthly Newsletter, No Mediocre! and get vital updates, insights, and perspective on all
          things marketing, as relates to our market.
        </p>
      </div>
      <div class="contact-content">
        <?php
            $statusMsg = !empty($_SESSION['msg'])?$_SESSION['msg']:'';
            unset($_SESSION['msg']);
            echo $statusMsg;
        ?>
        <form class="contact-form" action="function.php" method="post">
          <div class="small-fields">
            <div class="form-group">

              <div class="form-group">
                <input id="email" type="email" name="email" required value=""
                  onchange="this.setAttribute('value', this.value);">
                <label for="email">Email Address</label><span class="border-bottom"></span>
              </div>
            </div>

            <div class="buttons-container">
              <button class="rounded-btn color-one solid" type="submit">Sign Up!</button>
            </div>
        </form>
      </div>
    </div>
  </div>
  <!-- End Contact-->

  <!-- Start Footer-->
  <footer>
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1920 197.02">
      <path
        d="M1231,109.07C974.2,70.21,708.37,12,477,1.12,258.44-9.18,54.57,54.45,0,78.08V197H1920V31.1S1603.21,165.38,1231,109.07Z">
      </path>
      <path
        d="M1920,131.06s-316.79,72.31-689,16C974.2,108.19,706.37,41,475,30.1,256.44,19.81,54.57,70.55,0,94.18V197H1920Z">
      </path>
    </svg>
    <div class="container">

      <div class="foter-bottom">
        <div>SyncedayOne</div>
        <div>&copy; 2019</div>
      </div>
    </div>
  </footer>
  <!-- End Footer-->
  <!-- Start Scroll To Top Button-->
  <div class="Scroll-To-Top" id="Scroll-To-Top" title="Back To Top"><i class="fa fa-angle-up" aria-hidden="true"></i>
  </div>
  <!-- End Scroll To Top Button-->
  <!-- jQuery Library-->
  <script src="js/jquery-3.3.1.min.js"></script>
  <!-- Nice Scroll Plugin-->
  <script src="js/jquery.nicescroll.min.js"></script>
  <!-- Magnific Popup Plugin-->
  <script src="js/jquery.magnific-popup.min.js"></script>
  <!-- Owl Carousel Slider Plugin-->
  <script src="js/owl.carousel.min.js"></script>
  <!-- Website Script File-->
  <script src="js/script.js"></script>

  <script>
    function gotosite() {
      window.location = document.getElementById("resources").value;
    }
  </script>
</body>

</html>