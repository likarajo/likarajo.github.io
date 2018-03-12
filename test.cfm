<html>
<body>
	<cffile action="read" file="https://likarajo.github.io/data.xml" variable="myxml" />
	<cfset mydata = xmlParse(myxml) />
	<cfoutput>#mydata.data.aboutme.description.xmltext#</cfoutput>
</body>
</html>
