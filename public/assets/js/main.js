
$(window).on('load', function() {
    $('.level-bar-inner').each(function() {

        var itemWidth = $(this).data('level');
        
        $(this).animate({
            width: itemWidth
        }, 800);
    });
});

jQuery(document).ready(function($) {
    /*======= Skillset *=======*/
    $('.level-bar-inner').css('width', '0');
    
    /* Bootstrap Tooltip for Skillset */
    $('.level-label').tooltip();
    
    /* jQuery RSS - https://github.com/sdepold/jquery-rss */
    $("#rss-feeds").rss(
    
        //Change this to your own rss feeds
        "https://reddit.com/r/worldnews/.rss", {
           
         limit: 3,
         
         // valid values: 'show', 'slide', 'slideFast', 'slideSynced', 'slideFastSynced'
         effect: 'slideSynced',
         
         ssl: true,
         
         // outer template for the html transformation
         // default: "<ul>{entries}</ul>"
         // valid values: any string
         layoutTemplate: "<div class='items'>{entries}</div>",
         
         // inner template for each entry
         // default: '<li><a href="{url}">[{author}@{date}] {title}</a><br/>{shortBodyPlain}</li>'
         // valid values: any string
         entryTemplate: `
         <div class="item">
               <h3 class="title"><a href="{url}" target="_blank">{title}</a></h3>
               <div>
                  <a class="more-link" href="{url}" target="_blank">
                     <i class="fas fa-external-link-alt"></i>Read more
                  </a>
               </div>
         </div>
         `
         }
    );

   /* When user clicks send button, do a POST request with form info to server via AJAX and provide message to user if info was sent successfully or an error occurred  */
   var   name = $('#contact__name'),
         email = $('#contact__email'),
         message = $('#contact__message'),
         msgSuccess = $('#contact__msg-success'),
         msgError = $('#contact__msg-error');

   $('.contact__btn').on('click', function(e) {
      e.preventDefault();
      if (name.val() && email.val() && message.val()) {
         $.ajax({
            url: '/api/contact',
            method: 'POST',
            data: {
               name: name.val(),
               email: email.val(),
               message: message.val()
            },
            success: function() {
               msgSuccess.css('display', 'flex');
               name.val('');
               email.val('');
               message.val('');
            },
            error: function(request, status, error) {
               console.log(error)
               msgError.css('display', 'flex');
            }
         });
   
      } else {
         msgError.css('display', 'flex');

      }

      setTimeout(function() {
         msgError.css('display', 'none');
         msgSuccess.css('display', 'none');
   
      }, 3000);
   });
   

   /* Github Calendar - https://github.com/IonicaBizau/github-calendar */
   new GitHubCalendar("#github-graph", "Optimo1983", { responsive: true });

   /* Github Activity Feed - https://github.com/caseyscarborough/github-activity */
   GitHubActivity.feed({ username: "Optimo1983", selector: "#ghfeed" });
});


/* When user clicks 'Contact Me' button at top of page. Scroll page down to Contact section and 'highlight' Contact section briefly */
document.getElementById('scroll-btn').addEventListener('click', (e) => {
   setTimeout(() => {
      document.getElementById('contact').style.boxShadow = '0 0 12px 0px #5CE0D8';
   }, 500);
   setTimeout(() => {
      document.getElementById('contact').style.boxShadow = 'none';
   }, 1500);
});