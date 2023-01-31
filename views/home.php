<!DOCTYPE html>
<html>

<head>
    <meta charset="utf-8">
    <title>Portfolio</title>
    <link rel="stylesheet" href="../css/reset.css">
    <link rel="stylesheet" href="../css/style.css">

    <script src="https://kit.fontawesome.com/45e38e596f.js" crossorigin="anonymous"></script>

 

</head>

<body>


    <div id="page-wrapper">

    <header id="page-header">

    <nav id="main-nav" title="main-nav">
                <ul class="nav-menu">
                   <li class="nav-item"><a href="#" class="nav-link">Home</a></li>
                   <li class="nav-item"><a href="#intro" class="nav-link">About</a></li>
                   <li class="nav-item"><a href="#bio" class="nav-link">Bio</a></li>
                   <li class="nav-item"><a href="#work" class="nav-link">Work</a></li>
                   <li class="nav-item"><a href="#contact" class="nav-link">Contact me</a></li>
                </ul>
            
            <div class="hamburger">
                <span class="bar"></span>
                <span class="bar"></span>
                <span class="bar"></span>
            </div>

    </nav>
            <h1><span>Hi,</span> <span>I'm Ahlam,</span><br>
                <span class="scd">web developer and web mobile</span></h1>
            <p><span></span></p>
<br>



            <canvas id="canvas1">
                </canvas>
        
       
        </header>
        <section id="intro" class="page-section">
            <div class="inner">
                <h2 class="section-title">
                    <span>About</span>
                </h2>
                <div class="section-content">
                    <p class="citation"><cite>I never lose either I win or I learn</cite></p>
                    <p class="text-up">my portfolio is a representation of all that i have learned and accomplished as a student in a digital school , the writing samples in this portfolio show how my critical thinking skills have evolved over the course of the program 
                        <br>I hope you enjoy</p>
                    <p> 
                    </p>
                </div>
                <div class="actions">
                    <a href="#work" class="action-button action-button-plain">Work</a>
                    <a href="#contact" class="action-button action-button-line">Contact me</a>
                </div>
            </div>
        </section>
        <section id="bio" class="page-section">
            <div class="inner">
                <h2 class="section-title"><span>Bio</span></h2>
                <div class="section-content">
             
            
                    <h3 class="text-bio">I'm a Back-End Developper oriented , I really like to contributed on a website by build mechanisms , with  
                        multiple functions , secure data and make everything communicate , it's like put together the pieces of a puzzle <br>Here an evaluation of my skills and like I said , I still work  to progress
                    </h3>
        
                    <table>
                        <tr>
                            <th class="type-data" colspan="2">Developement</th>
                            <th class="type-data" colspan="2">Technique</th>
                        </tr>
                        <tr>
                            <th>Language</th>
                            <th>Note</th>
                            <th>Famework and Cms</th>
                            <th>Note</th>

                        </tr>
                        <tr>
                            <td>HTML</td>
                            <td><div class="l1"></div></td>
                            <td></td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>CSS</td>
                            <td><div class="l2"></div></td>
                            <td>Bootstrap</td>
                            <td><div class="l3"></div></td>
                        </tr>
                        <tr>
                            <td>PHP</td>
                            <td><div class="l4"></div></td>
                            <td>Symfony / Wordpress</td>
                            <td><div class="l5"></div></td>
                        </tr>
                        <tr>
                            <td>JAVASCRIPT</td>
                            <td><div class="l6"></div></td>
                            <td>Vue.js</td>
                            <td><div class="l7"></div></td>
                        </tr>
                    </table>
                    <h3 class="text-bio">
                        What about me and my soft skill , I'm a passionate developer it's a second part of my professionnal life and really like it ,  I'm a hard worker with a team spirit accentuated , I think I'm a cheerfull
                       person and I definitely prefer focus on the positive even though not all rosy</h3>
               
                    
                </div>
       
            </div>
        </section>
        <section id="work" class="page-section">
            <div class="inner">
                <h2 class="section-title">
                    <span>Work</span>
                </h2>
                <div class="section-content">
                    <article class="post">
                        <img src="../images/project-1.jpg" alt="sable">
                        <h1>Project 1</h1>
                        <p class="section-content_post">C'est une application de vente de livres d'occasion , ici je vous présente le Front,
                         cliquez pour plus d'informations et voir une démo
                        </p>
                        <footer>
                            <a href="../views/project1.php" class="more-button">M'book</a>
                        </footer>
                    </article>
                    <article class="post">
                        <img src="../images/project-2.jpg" alt="sable">
                        <h1>Project 2</h1>
                        <p class="section-content_post">C'est le Backoffice de l'application M'book , vous pouvez également cliquez pour plus d'informations et voir une démo
                        </p>
                        
                        <footer>
                            <a href="../views/project2.php" class="more-button">M'book backoffice</a>
                        </footer>
                    </article>
                    <article class="post">
                        <img src="../images/project-3.jpg" alt="sable">
                        <h1>Project 3</h1>
                        <p class="section-content_post">Excepturi quos unde aspernatur ut. Voluptate minus incidunt
                            totam at corporis. Minima labore harum ea, laudantium repellat illo eveniet?
                        </p>
                        <footer>
                            <a href="../views/project3.php" class="more-button">Movie'time</a>
                        </footer>
                    </article>
                </div>
            </div>
        </section>
        <section id="contact" class="page-section">
            <div class="inner">
                <h2 class="section-title"><span>Contact</span></h2>
                <div class="section-content">
                <?php 
         require __DIR__ . '/templates/form.tpl.php';
        ?>
                    <span id="msg"></span>
                    <div class="social-icons">
                        <p><i class="fas fa-paper-plane"></i>mestar.ale@gmail.com</p>
                        <p><i class="fas fa-phone"></i>06.13.46.93.40</p>
                        <a href="https://facebook.com/"><i class="fab fa-facebook"></i></a>
                        <a href="https://facebook.com/"><i class="fab fa-twitter-square"></i></a>
                        <a href="https://facebook.com/"><i class="fab fa-instagram"></i></a>
                        <a href="https://www.linkedin.com/in/ahlam-mamoun/"><i class="fab fa-linkedin"></i></a>
                        <a href="../images/my-cv.pdf" dowload class="btn bnt2">Download cv</a>

                    </div>

                </div>
            </div>
        </section>
        <footer id="page-footer">

            Ahlam Mamoun copyright ... with work , better again <i class="fas fa-handshake"></i>
        </footer>
    </div>


    <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.5.1/gsap.min.js"></script>
    <script src="https://unpkg.com/typewriter-effect@latest/dist/core.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.11.4/gsap.min.js"></script>
    <script src='https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js'></script>

    <script src="../js/app.js "></script>







</body>

</html>