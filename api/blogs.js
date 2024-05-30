// images
import blogImg1 from "/public/images/blog/img-1.jpg";
import blogImg2 from "/public/images/blog/img-2.jpg";
import blogImg3 from "/public/images/blog/img-3.jpg";

import blog1 from "/public/images/blog/single/img-1.jpg";
import blog2 from "/public/images/blog/single/img-2.jpg";
import blog3 from "/public/images/blog/single/img-3.jpg";

import recent1 from "/public/images/recent-posts/img-1.jpg";
import recent2 from "/public/images/recent-posts/img-2.jpg";
import recent3 from "/public/images/recent-posts/img-3.jpg";


import blogSingleImg1 from "/public/images/blog/1.jpg";
import blogSingleImg2 from "/public/images/blog/2.jpg";
import blogSingleImg3 from "/public/images/blog/3.jpg";



const blogs = [
    {
        id: '1',
        title: 'Your clothes give them a warm hug.',
        slug: 'Your-clothes-give-them-a-warm-hug.',
        subtitle: 'Proin convallis placerat volutpat molestie of integer. Vitae venenatis habitasse',
        create_at:"25 Jan, 24"  ,
        screens: blogImg1,
        bsing: blog1,
        recent: recent1,
        blogSingleImg: blogSingleImg1,
        comment: '35',
        day: '28',
        month: 'AUGUST',
        blClass: 'format-standard-image',
        athor: 'Jerome Bell',
    },
    {
        id: '2',
        title: 'They also deserve proper education as you.',
        slug: 'They-also-deserve-proper-education-as-you',
        subtitle: 'Proin convallis placerat volutpat molestie of integer. Vitae venenatis habitasse',
        create_at: '25 Jan, 24',
        screens: blogImg2,
        bsing: blog2,
        recent: recent2,
        blogSingleImg: blogSingleImg2,
        comment: '35',
        day: '28',
        month: 'AUGUST',
        blClass: 'format-standard-image',
        athor: 'Robert Fox',
    },
    {
        id: '3',
        title: 'Help make their dreams come true.',
        slug: 'Help-make-their-dreams-come-true',
        subtitle: 'Proin convallis placerat volutpat molestie of integer. Vitae venenatis habitasse',
        create_at: '25 Jan, 24',
        screens: blogImg3,
        bsing: blog3,
        recent: recent3,
        blogSingleImg: blogSingleImg3,
        comment: '35',
        day: '28',
        month: 'AUGUST',
        blClass: 'format-standard-image',
        athor: 'Jenny Wilson',
    },



];
export default blogs;