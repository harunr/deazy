$(document).ready(function() {
    if( $('#animated-svg').length > 0 ) {
        Snap.plugin( function( Snap, Element, Paper, global ) {
            Paper.prototype.circlePath = function(cx,cy,r) {
                var p = "M" + cx + "," + cy;
                p += "m" + -r + ",0";
                p += "a" + r + "," + r + " 0 1,0 " + (r*2) +",0";
                p += "a" + r + "," + r + " 0 1,0 " + -(r*2) + ",0";
                return this.path(p, cx, cy );

            };
        });

        var s = Snap("#animated-svg");

        //animate the circle along the line path
        var circle = s.select("#svg_2");
        var line = s.select('#path4930');
        var flag;
        var len = Snap.path.getTotalLength(line.attr("d"));

        var circleBbox = circle.getBBox();
        var moveCircleAlongLine = function () {
            Snap.animate(0, len, function (l) {
                // Safari bug workaround: forcing redraw
                s.attr({width: 100 + (flag = !flag ? 1e-5 : 0) + "%"});
                var dot = line.getPointAtLength(len - l);
                circle.attr({
                    transform: "t" + [dot.x - circleBbox.cx, dot.y -  circleBbox.cy] + "r" + (dot.alpha - 90)
                });
            }, 7000, moveCircleAlongLine);
        };

        //animate the first wheel
        var wheel = s.select("#path4979");
        var wheelBbox = wheel.getBBox();
        var rotateWheel = function(){
            wheel.transform('r0,' + wheelBbox.cx + ',' + wheelBbox.cy);
            wheel.animate({  transform: "r360," + wheelBbox.cx + ',' + wheelBbox.cy }, 2000, rotateWheel);
        };

        //animate the second, slower wheel
        var wheel2 = s.select("#path4981");
        var wheel2bbox = wheel2.getBBox();
        var rotateWheelSlow = function(){
            wheel2.transform('r0,' + wheel2bbox.cx + ',' + wheel2bbox.cy);
            wheel2.animate({  transform: "r360," + wheel2bbox.cx + ',' + wheel2bbox.cy }, 3500, rotateWheelSlow);
        };

        //create the first blink function
        var star1 = s.select("#path4969");
        var star2 = s.select("#path4973");
        var blink1 = function (){
            star1.animate({  opacity: "0" }, 500, function(){
                star1.animate({  opacity: "1" }, 500);
            });
            star2.animate({  opacity: "0" }, 500, function(){
                star2.animate({  opacity: "1" }, 500, blink1);
            });
        };

        //create the second blink function
        var star3 = s.select("#path7367");
        var star4 = s.select("#path4975");
        var blink2 = function (){
            star3.animate({  opacity: "0" }, 250, function(){
                star3.animate({  opacity: "1" }, 250);
            });
            star4.animate({  opacity: "0" }, 250, function(){
                star4.animate({  opacity: "1" }, 250, blink2);
            });
        };

        //create the third blink animation
        var star5 = s.select("#path4964");
        var star6 = s.select("#path4962");
        var blink3 = function (){
            star5.animate({  opacity: "0" }, 1000, function(){
                star5.animate({  opacity: "1" }, 1000);
            });
            star6.animate({  opacity: "0" }, 1000, function(){
                star6.animate({  opacity: "1" }, 1000, blink3);
            });
        };
        // function to calculate opacity
        function calculateOpacity(step, length){
            var lu = Math.round(step*100/length)/100;
            if(lu <= 0.5){
                return lu*2;
            } else {
                return (1 - lu)*2;
            }
        }

        //Animate keyboard flying elements
        var keyboardElements = ['path917', 'path5060', 'path5068', 'path4985', 'path5064'];
        var keyboardElementsBbox = [];
        var keyboardPaths = ['path928', 'path930', 'path920', 'path926', 'path924'];
        keyboardElements.forEach(function(e,i) {
            var element = s.select("#" + e);
            keyboardElementsBbox[i] = element.getBBox();
        });

        function moveElementsAlongKeyboardArcs(){
            var keyboard =  s.select("#path5030");
            var keyboardbbox = keyboard.getBBox(); //get keyboard coordinates and dimensions
            keyboardElements.forEach(function(e,i) {
                var element = s.select("#" + e);
                if(keyboardElementsBbox[i].cx<keyboardbbox.cx){
                    var path = s.select("#"+keyboardPaths[i]);
                    var length = path.getTotalLength();
                    Snap.animate(0, length, function (l) {
                        // Safari bug workaround: forcing redraw
                        //s.attr({width: 100 + (flag1 = !flag1 ? 1e-5 : 0) + "%"});
                        var dot = path.getPointAtLength(length-l);
                        var opacity = calculateOpacity(length-l, length);
                        element.attr({
                            transform: "t" + [dot.x - keyboardElementsBbox[i].cx, dot.y -  keyboardElementsBbox[i].cy] + "r" + (dot.alpha - 90),
                            opacity: opacity
                        });

                    }, 3000, function(){
                        if(i===keyboardElements.length-1){
                            moveElementsAlongKeyboardArcs();
                        }
                    });
                } else {
                    var path = s.select("#"+keyboardPaths[i]);
                    var length = path.getTotalLength();
                    Snap.animate(0, length, function (l) {
                        // Safari bug workaround: forcing redraw
                        //s.attr({width: 100 + (flag1 = !flag1 ? 1e-5 : 0) + "%"});
                        var dot = path.getPointAtLength(l);
                        var opacity = calculateOpacity(l, length);
                        element.attr({
                            transform: "t" + [dot.x - keyboardElementsBbox[i].cx, dot.y -  keyboardElementsBbox[i].cy] + "r" + (dot.alpha - 90),
                            opacity: opacity
                        });

                    }, 3000, function(){
                        if(i===keyboardElements.length-1){
                            moveElementsAlongKeyboardArcs();
                        }
                    });
                }
            });
        }

        //Animate laptop flying elements
        var laptopElements = ['path5072', 'path5070', 'path5054', 'path4983'];
        var laptopElementsBbox = [];
        var laptopPaths = ['path936', 'path940', 'path942', 'path938'];
        laptopElements.forEach(function(e,i) {
            var element = s.select("#" + e);
            laptopElementsBbox[i] = element.getBBox();
        });

        function moveElementsAlongLaptopArcs(){
            var laptop =  s.select("#path4928");
            var laptopbbox = laptop.getBBox(); //get keyboard coordinates and dimensions
            laptopElements.forEach(function(e,i) {
                var element = s.select("#" + e);
                if(laptopElementsBbox[i].cx<laptopbbox.cx){
                    var path = s.select("#"+laptopPaths[i]);
                    var length = path.getTotalLength();
                    Snap.animate(0, length, function (l) {
                        // Safari bug workaround: forcing redraw
                        //s.attr({width: 100 + (flag1 = !flag1 ? 1e-5 : 0) + "%"});
                        var dot = path.getPointAtLength(length-l);
                        var opacity = calculateOpacity(length-l, length);
                        element.attr({
                            transform: "t" + [dot.x - laptopElementsBbox[i].cx, dot.y -  laptopElementsBbox[i].cy] + "r" + (dot.alpha - 90),
                            opacity: opacity
                        });
                    }, 3000, function(){
                        if(i===laptopElements.length-1){
                            moveElementsAlongLaptopArcs();
                        }
                    });
                } else {
                    var path = s.select("#"+laptopPaths[i]);
                    var length = path.getTotalLength();
                    Snap.animate(0, length, function (l) {
                        // Safari bug workaround: forcing redraw
                        //s.attr({width: 100 + (flag1 = !flag1 ? 1e-5 : 0) + "%"});
                        var dot = path.getPointAtLength(l);
                        var opacity = calculateOpacity(l, length);
                        element.attr({
                            transform: "t" + [dot.x - laptopElementsBbox[i].cx, dot.y -  laptopElementsBbox[i].cy] + "r" + (dot.alpha - 90),
                            opacity: opacity
                        });
                    }, 3000, function(){
                        if(i===laptopElements.length-1){
                            moveElementsAlongLaptopArcs();
                        }
                    });
                }
            });
        }

        //Animate laptop lines
        var laptopLines = ['path5045', 'path5043', 'path4960'];
        laptopLines.forEach(function(e,i) {
            var line = s.select("#" + e);
            var length = line.getTotalLength();
            line.attr({
                strokeDashoffset: length,
                strokeDasharray: length
            });
        });
        function animateLaptopLines(){
            laptopLines.forEach(function(e,i) {
                var line = s.select("#" + e);
                var length = line.getTotalLength();
                line.attr({
                    strokeDashoffset: length,
                    strokeDasharray: length
                });
                setTimeout(function () {
                    Snap.animate(0, length, function (l) {
                        // Safari bug workaround: forcing redraw
                        //s.attr({width: 100 + (flag1 = !flag1 ? 1e-5 : 0) + "%"});
                        var dot = line.getPointAtLength(l);
                        line.attr({
                            strokeDashoffset: length - l
                        });
                    }, 3000, function () {
                        if (i === laptopLines.length - 1) {
                            animateLaptopLines();
                        }
                    });
                }, 4000);
            });

        }


        //Init all animations
        animateLaptopLines();
        blink1();
        blink2();
        blink3();
        moveCircleAlongLine();
        rotateWheel();
        rotateWheelSlow();
        moveElementsAlongKeyboardArcs();
        moveElementsAlongLaptopArcs();
    }});