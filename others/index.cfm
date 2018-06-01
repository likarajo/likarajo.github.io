<html>

<title>Rajarshi Chattopadhyay</title>

<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
	
<cfset mydata = XmlParse("https://likarajo.github.io/data.xml") />

<cfoutput>

<cfloop array="#mydata.data.stylesheets.stylesheet#" index="i">
	<link rel="stylesheet" href="#i.link.xmltext#">	
</cfloop>

<style>
	html,body,h1,h2,h3,h4,h5,h6 {font-family: "Roboto", sans-serif}
</style>

<body class="w3-dark-grey">

<!-- Top menu on small screens -->
<header class="w3-container w3-top w3-dark-grey w3-padding">
  <div class="w3-left w3-dark-grey">
  	<a href="#mydata.data.documents.resume.link.xmltext#" target="_blank" class="w3-large w3-button">Resume</a> <i class="w3-small">#mydata.data.documents.resume.update.xmltext#</i>	
  </div>
  <div class="w3-right w3-dark-grey">
	<i class="w3-large">Shortcuts</i> <a href="javascript:void(0)" class="w3-xlarge w3-button" onclick="w3_open()"><b>+</b></a>
  </div>
</header>

<!-- Sidebar/menu -->
<nav class="w3-sidebar w3-bar-block w3-black w3-animate-right w3-top w3-text-light-grey w3-large" style="z-index:3;width:250px;font-weight:bold;display:none;right:0;" id="mySidebar">
  <a href="javascript:void()" onclick="w3_close()" class="w3-bar-item w3-button w3-center w3-padding-32">CLOSE</a>
  <cfloop array="#mydata.data.shortcuts.shortcut#" index="i">
  	<a href="#i.name.xmltext#" onclick="w3_close()" class="w3-bar-item w3-button w3-center w3-padding-16">#i.label.xmltext#</a>  	
  </cfloop>
</nav>

<!-- Overlay effect when opening sidebar on small screens -->
<div class="w3-overlay w3-animate-opacity" onclick="w3_close()" style="cursor:pointer" title="close side menu" id="myOverlay"></div>

<!-- Page Container -->
<div class="w3-content w3-margin-top" style="max-width:1400px;">

  <!-- The Grid -->
  <div class="w3-row-padding">
  
    <!-- Left Column -->
    <div class="w3-third">
    
      <div class="w3-white w3-text-grey w3-card-2">
	  
        <div class="w3-display-container w3-margin-bottom">
		  <br><br>
          <img src="#mydata.data.profpic.xmltext#" style="width:100%" alt="Avatar" border="5">
        </div>
		
		<div class="w3-container">
			<cfloop array="#mydata.data.socials.social#" index="i">
				<a href="#i.link.xmltext#" target="_blank"><i class="fa #i.logo.xmltext# w3-xlarge w3-text-blue w3-hover-opacity"></i></a>
			</cfloop>          
			<a href="#mydata.data.acclaim.link.xmltext#" target="_blank"><i class="w3-hover-opacity"><img src="#mydata.data.acclaim.logo.xmltext#" height="24" width="24"></i></a>
		</div>		
		<hr>
		<div class="w3-container">
			<p class="w3-text-grey"><i class="fa fa-briefcase fa-fw w3-margin-right w3-large w3-text-teal"></i>#mydata.data.office.designation.xmltext# @ <a href="#mydata.data.office.companylink.xmltext#" target="_blank">#mydata.data.office.company.xmltext#</a> <a href="#mydata.data.office.centerlink.xmltext#" target="_blank">#mydata.data.office.center.xmltext#</a></p>
            <p class="w3-text-grey"><i class="fa fa-home fa-fw w3-margin-right w3-large w3-text-teal"></i>#mydata.data.office.country.xmltext#</p>
            <p class="w3-text-grey"><i class="fa fa-envelope fa-fw w3-margin-right w3-large w3-text-teal"></i><a href="mailto:#mydata.data.office.email.xmltext#">#mydata.data.office.email.xmltext#</a></p>
        </div>
		<hr>		
		<div class="w3-container">		  
		    <p class="w3-large"><b><i class="fa fa-asterisk fa-fw w3-margin-right w3-text-teal"></i>Skills</b></p>
            <p class="w3-text-grey">Programming languages and scripting: #mydata.data.skills.proglangs.xmltext#</p>
		    <p class="w3-text-grey">Tools and Frameworks: #mydata.data.skills.tools.xmltext#</p>
			<p class="w3-text-grey">Softwares: #mydata.data.skills.softwares.xmltext#</p>
		    <p class="w3-text-grey">Others: #mydata.data.skills.others.xmltext#</p>
		</div>		
		<hr>
		
		<!-- Contact Section -->
		<div class="w3-container" id="contact" style="min-height:100%;">
			<h3 class="w3-border-bottom w3-border-light-grey w3-padding-16">Contact</h3>
			<p>Lets get in touch to talk about our interests and exchange knowledge!</p>
			<form action="mailto:#mydata.data.office.email.xmltext#</p>" target="_blank">
				<input class="w3-input" type="text" placeholder="Name" required name="Name">
				<input class="w3-input w3-section" type="text" placeholder="Email" required name="Email">
				<input class="w3-input w3-section" type="text" placeholder="Subject" required name="Subject">
				<input class="w3-input w3-section" type="text" placeholder="Comment" required name="Comment">
				<button class="w3-button w3-black w3-section" type="submit"><i class="fa fa-paper-plane"></i>SEND MESSAGE</button>
			</form>
		</div>
		
      </div>
    <!-- End Left Column -->
    </div>

    <!-- Right Column -->
    <div class="w3-twothird">	
	  	
	  <div class="w3-container w3-card w3-white w3-margin-bottom" id="opener">
	    <br><br>
		<div class="w3-full" id="timeline">
			<h5 class="w3-text-grey w3-padding-16"><i class="fa fa-clock-o fa-fw w3-margin-right w3-xxlarge w3-text-teal"></i>My timeline</h5>
			<div class="timeline">
				<iframe src="https://cdn.knightlab.com/libs/timeline3/latest/embed/index.html?source=1tn6AWYmxnQBSdjha1p7EjwnRZydycS-aEt_1M7_bsoc&font=Default&lang=en&initial_zoom=2&height=400" height="400" width="100%"></iframe>
			</div>
		</div>  
		<!---<div class="w3-half" id="wordle">
			<h5 class="w3-text-grey w3-padding-16"><i class="fa fa-search-minus fa-fw w3-margin-right w3-xxlarge w3-text-teal"></i>My areas of work</h5>
			<div class="wordle">
				<iframe src="#mydata.data.wordle.link.xmltext#" height="400" width="100%"></iframe>
			</div>
		</div>--->
		<br>
	  </div>	
	  
	  <div class="w3-container w3-card w3-white w3-margin-bottom" id="aboutme">
	    <br><br>
		<h2 class="w3-text-grey w3-padding-16"><i class="fa fa-user fa-fw w3-margin-right w3-xxlarge w3-text-teal"></i>About Me</h2>
		<div>#mydata.data.aboutme.description#</div>
		<br>
	  </div>	
	  
	  <div class="w3-container w3-card-2 w3-white w3-margin-bottom" id="education">
		<br><br>
        <h2 class="w3-text-grey w3-padding-16"><i class="fa fa-book fa-fw w3-margin-right w3-xxlarge w3-text-teal"></i>Education</h2>
        <div class="w3-container">
          <h5 class="w3-opacity"><b><a href="#mydata.data.education.ugrad.link.xmltext#" target="_blank">#mydata.data.education.ugrad.univ.xmltext#</a></b></h5>
          <h6 class="w3-text-teal"><i class="fa fa-calendar fa-fw w3-margin-right"></i>#mydata.data.education.ugrad.date.xmltext#</h6>
		  <p class="w3-text-grey">#mydata.data.education.ugrad.degree.xmltext# - #mydata.data.education.ugrad.subject.xmltext#</p><br>
        </div>
      </div>
	
	  <div class="w3-container w3-card-2 w3-white w3-margin-bottom" id="career">
	    <br><br>
		<h2 class="w3-text-grey w3-padding-16"><i class="fa fa-suitcase fa-fw w3-margin-right w3-xxlarge w3-text-teal"></i>Career</h2>
        <cfloop array="#mydata.data.career.job#" index="i">
        	<div class="w3-container">
          		<h5 class="w3-opacity"><b>#i.designation.xmltext# / <a href="#i.companylink.xmltext#" target="_blank">#i.company.xmltext#</a></b></h5>
          		<h6 class="w3-text-teal"><i class="fa fa-calendar fa-fw w3-margin-right"></i>#i.date.xmltext#</h6>
          		<p class="w3-text-grey">Responsibilities: #i.responsibilities.xmltext#</p>
          		<hr>
        	</div>
        </cfloop>       
      </div>
	  
	  <div class="w3-container w3-card-2 w3-white w3-margin-bottom" id="projects">
	    <br><br>
		<h2 class="w3-text-grey w3-padding-16"><i class="fa fa-github-square fa-fw w3-margin-right w3-xxlarge w3-text-teal"></i>Projects</h2>
        <cfloop array="#mydata.data.projects.project#" index="i">
			<div class="w3-container">
				<h5 class="w3-opacity"><b><a href="#i.link.xmltext#" target="_blank">#i.name.xmltext#</a></b></h5>
				<h6 class="w3-text-teal"><i class="fa fa-calendar fa-fw w3-margin-right"></i>#i.date.xmltext#</h6>
				<p class="w3-text-grey">Desc: #i.description.xmltext#</p>
				<hr>		  
			</div>
		</cfloop>
	  </div>
	  
	  <div class="w3-container w3-card-2 w3-white w3-margin-bottom" id="papers">
	    <br><br>
		<h2 class="w3-text-grey w3-padding-16"><i class="fa fa-pencil-square fa-fw w3-margin-right w3-xxlarge w3-text-teal"></i>Papers</h2>
        <cfloop array="#mydata.data.papers.paper#" index="i">
        	<div class="w3-container">
	          	<h6 class="w3-opacity">#i.author.xmltext#, <i>#i.title.xmltext#</i>, #i.detail.xmltext# [<b>#i.note.xmltext#</b>]</h6>
	          	<h6 class="w3-text-teal"><i class="fa fa-calendar fa-fw w3-margin-right"></i>#i.date.xmltext#</h6>
	          	<hr>		  
        	</div>
        </cfloop>
      </div>
	  
	  <div class="w3-container w3-card-2 w3-white w3-margin-bottom" id="activities">
	    <br><br>
		<h2 class="w3-text-grey w3-padding-16"><i class="fa fa-microphone fa-fw w3-margin-right w3-xxlarge w3-text-teal"></i>Academic Activities</h2>
		<cfloop array="#mydata.data.activities.activity#" index="i">
			<div class="w3-container">
          		<h5 class="w3-opacity"><b>#i.action.xmltext#</b>, #i.forum.xmltext# / #i.place.xmltext#</h5>
				<h6 class="w3-opacity">#i.subject.xmltext#</h6>
          		<h6 class="w3-text-teal"><i class="fa fa-calendar fa-fw w3-margin-right"></i>#i.date.xmltext#</h6>
          		<hr>
          	</div>
		</cfloop>		
	  </div>

	  <div class="w3-container w3-card-2 w3-white w3-margin-bottom" id="certifications">
		<br><br>
		<h2 class="w3-text-grey w3-padding-16"><i class="fa fa-certificate fa-fw w3-margin-right w3-xxlarge w3-text-teal"></i>Certifications and Badges</h2>
        <cfloop array="#mydata.data.badges.badge#" index="i">
			<div class="w3-container">
				<h5 class="w3-text-teal"><i class="fa fa-calendar fa-fw w3-margin-right">#i.date.xmltext#</i></h5>
				<h6><b>#i.name.xmltext#</b></h6>
				<div data-iframe-width="600" data-iframe-height="270" data-share-badge-id="#i.id.xmltext#"></div>					
			</div>
		</cfloop>
		<cfloop array="#mydata.data.certifications.certification#" index="i">
			<div class="w3-container">
				<h5 class="w3-text-teal"><i class="fa fa-calendar fa-fw w3-margin-right">#i.date.xmltext#</i></h5>
				<h6><b>#i.name.xmltext#</b></h6>									
			</div>
		</cfloop>			
	  </div>			

	<!-- End Right Column -->
    </div>
    
  <!-- End Grid -->
  </div>
  
  <!-- End Page Container -->
</div>

</cfoutput>

<!-- Open and Close sidebar -->
<script>
	function w3_open() {
		document.getElementById("mySidebar").style.display = "block";
		document.getElementById("myOverlay").style.display = "block";
	}

	function w3_close() {
		document.getElementById("mySidebar").style.display = "none";
		document.getElementById("myOverlay").style.display = "none";
	}	
</script>

<!-- Acclaim badges -->
<script type="text/javascript">
	    (function() {
		     var s = document.createElement('script');
		     s.type = 'text/javascript';
		     s.async = true;
		     s.src = '//cdn.youracclaim.com/assets/utilities/embed.js';
		     var o = document.getElementsByTagName('script')[0];
		     o.parentNode.insertBefore(s, o);
		})();
</script>

<!-- Google Analytics -->
<script>
	(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
	(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
	m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
	})(window,document,'script','https://www.google-analytics.com/analytics.js','ga');
	ga('create', 'UA-105786857-2', 'auto');
	ga('send', 'pageview');
</script>

</body>
</html>
