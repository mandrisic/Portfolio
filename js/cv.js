new fullpage('#fullpage', {
	//options here
    autoScrolling:true,
    navigation: true,
    onLeave: (origin,destination,direction)=> {
        const section = destination.item;
        console.log(section);
        TweenMax.fromTo(section, 1, {opacity: 0}, {opacity: 1},'+=700');
    }
});