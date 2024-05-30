import React from 'react';
import Link from 'next/link'
import about from '/public/images/blog-details/author.jpg'
import blogs from '../../api/blogs'


// instagram
import insta1 from '/public/images/instragram/img-1.jpg'
import insta2 from '/public/images/instragram/img-2.jpg'
import insta3 from '/public/images/instragram/img-3.jpg'
import insta4 from '/public/images/instragram/img-4.jpg'
import insta5 from '/public/images/instragram/img-5.jpg'
import insta6 from '/public/images/instragram/img-6.jpg'
import Image from 'next/image';

const SubmitHandler = (e) => {
    e.preventDefault()
}

const ClickHandler = () => {
    window.scrollTo(10, 0);
}

const BlogSidebar = (props) => {
    return (
        <div className={`col col-lg-4 col-12 ${props.blLeft}`}>
            <div className="blog-sidebar">
                <div className="widget about-widget">
                    <div className="img-holder">
                        <Image src={about} alt="" />
                    </div>
                    <h4>Bernard Rodgers</h4>
                    <p>Hi! beautiful people. I`m an authtor of this blog. Read our post - stay with us</p>
                    <div className="social">
                        <ul className="clearfix">
                            <li><Link onClick={ClickHandler} href="/"><i className="ti-facebook"></i></Link></li>
                            <li><Link onClick={ClickHandler} href="/"><i className="ti-twitter-alt"></i></Link></li>
                            <li><Link onClick={ClickHandler} href="/"><i className="ti-linkedin"></i></Link></li>
                            <li><Link onClick={ClickHandler} href="/"><i className="ti-pinterest"></i></Link></li>
                        </ul>
                    </div>
                </div>
                <div className="widget search-widget">
                    <h3>Search Here</h3>
                    <form onSubmit={SubmitHandler}>
                        <div>
                            <input type="text" className="form-control" placeholder="Search Post.." />
                            <button type="submit"><i className="ti-search"></i></button>
                        </div>
                    </form>
                </div>
                <div className="widget category-widget">
                    <h3>Post Categories</h3>
                    <ul>
                        <ul>
                            <li><Link onClick={ClickHandler} href="/blog-single/Your-clothes-give-them-a-warm-hug.">Child Education<span>5</span></Link></li>
                            <li><Link onClick={ClickHandler} href="/blog-single/Your-clothes-give-them-a-warm-hug.">Healthy Food<span>7</span></Link></li>
                            <li><Link onClick={ClickHandler} href="/blog-single/Your-clothes-give-them-a-warm-hug.">Clean Water<span>3</span></Link></li>
                            <li><Link onClick={ClickHandler} href="/blog-single/Your-clothes-give-them-a-warm-hug.">Secure Life<span>2</span></Link></li>
                            <li><Link onClick={ClickHandler} href="/blog-single/Your-clothes-give-them-a-warm-hug.">Healthy Lifestyle<span>8</span></Link></li>
                        </ul>
                    </ul>
                </div>
                <div className="widget recent-post-widget">
                    <h3>Related Posts</h3>
                    <div className="posts">
                        {blogs.map((blog, bl) => (
                            <div className="post" key={bl}>
                                <div className="img-holder">
                                    <Image src={blog.recent} alt="" />
                                </div>
                                <div className="details">
                                    <h4><Link onClick={ClickHandler} href={'/blog-single/[slug]'} as={`/blog-single/${blog.slug}`}>{blog.title}</Link></h4>
                                    <span className="date">{blog.create_at}</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="widget wpo-instagram-widget">
                    <div className="widget-title">
                        <h3>Instagram</h3>
                    </div>
                    <ul className="d-flex">
                        <li><Link href="/event-single/Solve-the-Water-Problem-of-World" onClick={ClickHandler} ><Image src={insta1}
                            alt="" /></Link></li>
                        <li><Link href="/event-single/Solve-the-Water-Problem-of-World" onClick={ClickHandler} ><Image src={insta2}
                            alt="" /></Link></li>
                        <li><Link href="/event-single/Solve-the-Water-Problem-of-World" onClick={ClickHandler} ><Image src={insta3}
                            alt="" /></Link></li>
                        <li><Link href="/event-single/Solve-the-Water-Problem-of-World" onClick={ClickHandler} ><Image src={insta4}
                            alt="" /></Link></li>
                        <li><Link href="/event-single/Solve-the-Water-Problem-of-World" onClick={ClickHandler} ><Image src={insta5}
                            alt="" /></Link></li>
                        <li><Link href="/event-single/Solve-the-Water-Problem-of-World" onClick={ClickHandler} ><Image src={insta6}
                            alt="" /></Link></li>
                    </ul>
                </div>
                <div className="widget tag-widget">
                    <h3>Tags</h3>
                    <ul>
                        <li><Link onClick={ClickHandler} href="/event-single/Solve-the-Water-Problem-of-World">Charity</Link></li>
                        <li><Link onClick={ClickHandler} href="/event-single/Solve-the-Water-Problem-of-World">Planning</Link></li>
                        <li><Link onClick={ClickHandler} href="/event-single/Solve-the-Water-Problem-of-World">Helping</Link></li>
                        <li><Link onClick={ClickHandler} href="/event-single/Solve-the-Water-Problem-of-World">Education</Link></li>
                        <li><Link onClick={ClickHandler} href="/event-single/Solve-the-Water-Problem-of-World">Medical</Link></li>
                        <li><Link onClick={ClickHandler} href="/event-single/Solve-the-Water-Problem-of-World">Wildlife</Link></li>
                        <li><Link onClick={ClickHandler} href="/event-single/Solve-the-Water-Problem-of-World">Donation</Link></li>
                        <li><Link onClick={ClickHandler} href="/event-single/Solve-the-Water-Problem-of-World">Help</Link></li>
                        <li><Link onClick={ClickHandler} href="/event-single/Solve-the-Water-Problem-of-World">World Pandamic</Link></li>
                    </ul>
                </div>
            </div>
        </div>
    )

}

export default BlogSidebar;
