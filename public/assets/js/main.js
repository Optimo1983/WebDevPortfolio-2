
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
    
    /* Github Calendar - https://github.com/IonicaBizau/github-calendar */
    new GitHubCalendar("#github-graph", "Optimo1983", { responsive: true });

    /* Github Activity Feed - https://github.com/caseyscarborough/github-activity */
    GitHubActivity.feed({ username: "Optimo1983", selector: "#ghfeed" });
});


document.getElementById('scroll-btn').addEventListener('click', (e) => {

   setTimeout(() => {
      document.getElementById('contact').style.boxShadow = '0 0 12px 0px #5CE0D8';
   }, 500);
   setTimeout(() => {
      document.getElementById('contact').style.boxShadow = 'none';
   }, 1500);
});

// document.querySelector('.contact__btn').addEventListener('click', (e) => {
//    e.preventDefault();
//    submitMsg();

   
//    async function submitMsg() {
//       const name = document.querySelector('.contact__name').value,
//             email = document.querySelector('.contact__email').value,
//             message = document.querySelector('.contact__message').value;

//       try {
//          await axios.post('/contact', {
//             name: name,
//             email: email,
//             message: message
//          })
//          .then(response => {
//             if (response.data.error) {
//                return console.log(response.data.error);
//             }
   
//             return console.log(response.data)
//          });
//       } catch (error) {
//          if (error) {
//             console.log(error);
//          }
//       }
//    }
// });
