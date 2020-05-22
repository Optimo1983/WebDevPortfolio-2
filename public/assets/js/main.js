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
        "https://reddit.com/r/worldnews/.rss",
      //   https://hnrss.org/frontpage
        
         {
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