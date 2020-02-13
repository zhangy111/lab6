'use strict';

// Call this function when the page loads (the "ready" event)
$(document).ready(function() {
	initializePage();
})

/*
 * Function that is called when the document is ready.
 */
function initializePage() {
	$('.project a').click(addProjectDetails);

	// $('#colorBtn').click(randomizeColors);
}

/*
 * Make an AJAX call to retrieve project details and add it in
 */
function addProjectDetails(e) {
	// Prevent following the link
	e.preventDefault();

	// Get the div ID, e.g., "project3"
	var projectID = $(this).closest('.project').attr('id');
	// get rid of 'project' from the front of the id 'project3'
	var idNumber = projectID.substr('project'.length);

	console.log("User clicked on project " + idNumber);

	var url = "/project/" + idNumber
	$.get(url, callback);
}

function callback(result) {
	console.log(result);
	var selector = "#project" + result['id'] + " .details";
	console.log(selector);
	var projectString = "<p>" + result['title'] + "</p>" 
	+ "<h4>" + result['date'] + "</h4>"
	+ "<a href='#'><img class='detailsImage' src = " + result['image'] + "></img></a>"
	+ "<p>" + result['summary'] + "</p>";
	console.log(projectString);
	$(selector).html(projectString);
}
