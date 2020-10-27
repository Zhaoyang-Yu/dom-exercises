//add your code here
function runOnLoad () {
    $('h2').css('color','red');
    $('ul').css('background-color','gold');
    $('h1').text('DOM Practice for JavaScript');
    $('li').eq(1).text('random noise');
    $('article').first().append('<p>I am a paragraph with <em>italics</em> and <strong>bold</strong><p>');
    $('.instructions').remove();
}

// "listen" for the "DOMContentLoaded" event, and then run "runOnLoad()"
document.addEventListener('DOMContentLoaded', runOnLoad, false);
