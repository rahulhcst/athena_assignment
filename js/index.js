/**
 * Created by Rahul Sharma on 12/15/2016.
 */

$(document).ready(function () {
    var athenistasData=[
        {
            "field":"Data Science",
            "name":"Greg Joondeph-Breidbart",
            "profile":"Data Engineer Manager",
            "place":"Watertown, MA",
            "link":"/",
            "image":"images/greg-joondeph_breidbart_wat.png"
        },
        {
            "field":"Product Innovation",
            "name":"Anita Gupta",
            "profile":"Product Innovation Manager",
            "place":"San Francisco, CA",
            "link":"/",
            "image":"images/anita_gupta_sf.jpg"
        },
        {
            "field":"User Experience",
            "name":"Ligmie Preval",
            "profile":"Senior Usability Associate",
            "place":"Watertown, MA",
            "link":"/",
            "image":"images/ligmie_preval_wat.png"
        },
        {
            "field":"Development",
            "name":"Kevin Weaver",
            "profile":"Lead Developer",
            "place":"Watertown, MA",
            "link":"/",
            "image":"images/kevin_weaver_watertown.png"
        },
        {
            "field":"Account Management",
            "name":"Amanda Montgomery",
            "profile":"Account Manager",
            "place":"Atlanta, GA",
            "link":"/",
            "image":"images/amanda__montgomery_-atlanta_rec.png"
        },
        {
            "field":"Inside Sales",
            "name":"Andrew Kahn",
            "profile":"Sales Executive",
            "place":"Watertown, MA",
            "link":"/",
            "image":"images/andrew_kahn_sales_rec.png"
        },
        {
            "field":"Office Services",
            "name":"Stephanie Ellis",
            "profile":"Office Services Manager",
            "place":"Austin, TX",
            "link":"/",
            "image":"images/stephanie_ellis_austin_rec.png"
        },
        {
            "field":"Network Onboarding Team",
            "name":"James Dantzler",
            "profile":"Project Associate",
            "place":"Atlanta, GA",
            "link":"/",
            "image":"images/james_dantzler_atlanta_rec.png"
        }
    ];

    var AthenaCareer={
        init:function(){
            var self=this;

            $('#athenistas-holder').on('mouseenter','.entity',function(){
                $(this).find('.entity-overlay').stop().slideDown('slow');
            }).on('mouseleave','.entity',function(){
                $(this).find('.entity-overlay').stop().slideUp('slow');
            });

            this.getAthenistas(this.setAthenistas);
        },
        getAthenistas:function(callback){
            callback(athenistasData);
        },
        setAthenistas:function(data){
            var $holder=$('#athenistas-holder');
            for(var i=0;i<data.length;i++){
                var template='<li class="entity"> ' +
                    '<div class="relative"> ' +
                    '<img src="'+data[i].image+'" class="complete-width"> ' +
                    '<div class="entity-overlay"> ' +
                    '<div> <h3 class="heading-h3">'+data[i].field+'</h3> ' +
                    '<div>'+data[i].name+'</div>' +
                    '<div>'+data[i].profile+'</div>' +
                    '<div>'+data[i].place+'</div>' +
                    '<a href="'+data[i].link+'"> ' +
                    '<div class="video"> ' +
                    '<span class="play-icon"><img src="images/btn_video_drkgreen.svg"></span> ' +
                    '<div> <span>Watch Video</span> </div> ' +
                    '</div> ' +
                    '</a> ' +
                    '</div> ' +
                    '</div> ' +
                    '</div> ' +
                    '</li>';
                $holder.append(template);
            }
        }
    };
    AthenaCareer.init();
});
