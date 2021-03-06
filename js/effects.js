//==============================================//
//★ EFFECTS ★//
//==============================================//
$(document).ready(function() {
    // $(".about").tooltip({ selector: '[data-toggle=tooltip]' });
    $(function () {
    $('[data-toggle="tooltip"]').tooltip()
    })
    $('#anchor1').click(function(){
    $('html, body').animate({
        scrollTop: $( $(this).attr('href') ).offset().top
    }, 500);
    return false;
});
});

(function() {

    var support = {
            transitions: Modernizr.csstransitions
        },
        // transition end event name
        transEndEventNames = {
            'WebkitTransition': 'webkitTransitionEnd',
            'MozTransition': 'transitionend',
            'OTransition': 'oTransitionEnd',
            'msTransition': 'MSTransitionEnd',
            'transition': 'transitionend'
        },
        transEndEventName = transEndEventNames[Modernizr.prefixed('transition')],
        onEndTransition = function(el, callback) {
            var onEndCallbackFn = function(ev) {
                if (support.transitions) {
                    if (ev.target != this) return;
                    this.removeEventListener(transEndEventName, onEndCallbackFn);
                }
                if (callback && typeof callback === 'function') {
                    callback.call(this);
                }
            };
            if (support.transitions) {
                el.addEventListener(transEndEventName, onEndCallbackFn);
            } else {
                onEndCallbackFn();
            }
        };

    new GridFx(document.querySelector('.grid'), {
        imgPosition: {
            x: 1,
            y: -0.75
        },
        onOpenItem: function(instance, item) {
            var win = {
                width: window.innerWidth,
                height: window.innerHeight
            };
            instance.items.forEach(function(el) {
                if (item != el) {
                    var delay = Math.floor(Math.random() * 130);
                    el.style.WebkitTransition = 'opacity .5s ' + delay + 'ms cubic-bezier(.7,0,.3,1), -webkit-transform .5s ' + delay + 'ms cubic-bezier(.7,0,.3,1)';
                    el.style.transition = 'opacity .5s ' + delay + 'ms cubic-bezier(.7,0,.3,1), transform .5s ' + delay + 'ms cubic-bezier(.7,0,.3,1)';

                    var elOffset = el.getBoundingClientRect(),
                        elSize = {
                            width: el.offsetWidth,
                            height: el.offsetHeight
                        };

                    el.style.WebkitTransform = 'translate3d(' + (win.width / 2 - elOffset.left - elSize.width / 2) + 'px,' + (win.height - elOffset.top - elSize.height / 2) + 'px,0) scale3d(0,0,1)';
                    el.style.transform = 'translate3d(' + (win.width / 2 - elOffset.left - elSize.width / 2) + 'px,' + (win.height - elOffset.top - elSize.height / 2) + 'px,0) scale3d(0,0,1)';
                    el.style.opacity = 0;
                }
            });
        },
        onCloseItem: function(instance, item) {
            instance.items.forEach(function(el) {
                if (item != el) {
                    el.style.WebkitTransition = 'opacity .3s, -webkit-transform .3s';
                    el.style.transition = 'opacity .3s, transform .3s';

                    el.style.WebkitTransform = 'translate3d(0,0,0) scale3d(1,1,1)';
                    el.style.transform = 'translate3d(0,0,0) scale3d(1,1,1)';
                    el.style.opacity = 1;

                    onEndTransition(el, function() {
                        el.style.transition = 'none';
                        el.style.WebkitTransform = 'none';
                    });
                }
            });
        }
    });
})();

//==============================================//
//★ STARS ★//
//==============================================//
var starCount = 70;
var delayTimeMax = 7;
var starContainer = $('#starContainer');

var height = starContainer.height();
// console.log("height", height);

var width = starContainer.width();
// console.log("width", width);

for (var i = 0; i < starCount; i++) {
    var starLeft = Math.floor((Math.random() * width) + 1); //number 1 plus
    var starTop = Math.floor((Math.random() * height) + 1);
    var delaytime = Math.random() * delayTimeMax;

    // console.log("starLeft", starLeft);
    // console.log("starTop", starTop);

    var starLight = $("<li>", {
        class: "starlight"
    }).css({
        top: starTop, //height random
        left: starLeft, //width random
        "-webkit-animation-delay": delaytime + 's', //randomize by 7(delaytimemax)
    });
    starContainer.append(starLight); //apppending starLight to .star_container
}

//==============================================//
//★ DYANMIC TEXT ★//
//==============================================//
title.innerHTML = 'Jordan Kimura';
profileImg.innerHTML = '<img class="img_profile" alt="Jordan" width="50" src="img/original/digital/jordan.png">';
greeting1.innerHTML = "Hi! I'm Jordan.";
greeting2.innerHTML = "I'm a UI/UX Designer, Developer,";
greeting3.innerHTML = "and Wellness Enthusiast.";
faIcons.innerHTML = '<i class="fa fa-code fa-2x" aria-hidden="true"></i>' + '<i class="fa fa-paint-brush fa-2x" aria-hidden="true"></i>';
galleryTitle.innerHTML = 'Portfolio' + '<span>Jordan Kimura</span>';
portfolioSection1.innerHTML = 'UI/UX/Design';
portfolioSection2.innerHTML = 'Web Development';
portfolioSection3.innerHTML = 'Print';
portfolioSection4.innerHTML = 'Photography';
portfolioSection5.innerHTML = 'Illustration';
aboutHeader.innerHTML = 'About';
aboutP1.innerHTML = 'Hello there, thanks for stopping by!';
aboutP2.innerHTML = 'My name is Jordan Kimura and I earned a B.A. in Graphic Design and an M.B.A. with an emphasis in Strategic Marketing while playing college tennis. Passionate about creating meaningful things that are enriching, I strive to implement well-branded creative assets and content deliverables.';
aboutDevSkills.innerHTML = 'Development Skills';
aboutDevIcons.innerHTML = '<img src="img/icons/06_icons.png" alt="HTML"  data-toggle="tooltip" data-placement="bottom" title="HTML">' + '<img src="img/icons/07_icons.png" alt="CSS" data-toggle="tooltip" data-placement="bottom" title="CSS">' + '<img src="img/icons/08_icons.png" alt="JavaScript" data-toggle="tooltip" data-placement="bottom" title="JavaScript">' + '<img src="img/icons/14_icons.png" alt="Angular" data-toggle="tooltip" data-placement="bottom" title="Angular">' + '<img src="img/icons/09_icons.png" alt="jQuery" data-toggle="tooltip" data-placement="bottom" title="jQuery">' + '<img src="img/icons/10_icons.png" alt="SASS" data-toggle="tooltip" data-placement="bottom" title="SASS">' + '<img src="img/icons/12_icons.png" alt="Bootstrap" data-toggle="tooltip" data-placement="bottom" title="Bootstrap">' + '<img src="img/icons/11_icons.png" alt="Github" data-toggle="tooltip" data-placement="bottom" title="Github">';
aboutDesignSkills.innerHTML = 'Design Skills';
aboutDesignIcons.innerHTML = '<img src="img/icons/13_icons.png" alt="Sketch" data-toggle="tooltip" data-placement="bottom" title="Sketch"> ' + '<img src="img/icons/15_icons.jpg" alt="InVision" data-toggle="tooltip" data-placement="bottom" title="InVision"> ' + '<img src="img/icons/01_icons.png" alt="Photoshop" data-toggle="tooltip" data-placement="bottom" title="Photoshop"> ' + '<img src="img/icons/02_icons.png" alt="Illustrator" data-toggle="tooltip" data-placement="bottom" title="Illustrator"> ' + '<img src="img/icons/03_icons.png" alt="After Effects" data-toggle="tooltip" data-placement="bottom" title="After Effects"> ' + '	<img src="img/icons/04_icons.png" alt="Premiere" data-toggle="tooltip" data-placement="bottom" title="Premiere"> ' + '<img src="img/icons/05_icons.png" alt="InDesign" data-toggle="tooltip" data-placement="bottom" title="InDesign">';

//resumeBtn.innerHTML = '<a class="a_resume" href="" target="_blank">View Resume </a><i class="fa fa-file-pdf-o" aria-hidden="true"></i>';
email.innerHTML = '<i class="fa fa-envelope" aria-hidden="true"></i>' + '<a href="mailto:jordantennis7@gmail.com" class="email"> jordantennis7@gmail.com</a>';
location1.innerHTML = 'South Orange County, CA';
location2.innerHTML = 'United States';
contactIcons.innerHTML = '<a class="contactIcon" href="https://www.linkedin.com/in/jordankimura" target="_blank" alt="Jordan Kimura"><i class="fa fa-linkedin fa-2x animated" aria-hidden="true"></i></a>';
//contactIcons.innerHTML = '<a class="contactIcon" href="https://www.linkedin.com/in/jordankimura" target="_blank" alt="Jordan Kimura"><i class="fa fa-linkedin fa-2x animated" aria-hidden="true"></i></a>' + '<a class="contactIcon" href="https://github.com/designarchitect" target="_blank" alt="designarchitect"><i class="fa fa-github fa-2x animated" aria-hidden="true"></i></a>';
var currentYearPara = document.getElementById('currentYear');
currentYearPara.innerHTML = 'Jordan Kimura &copy; 2011 - ' + new Date().getFullYear();
poweredBy.innerHTML = 'Powered by <a href="https://github.com" target="_blank" alt="github">Github</a>.';
