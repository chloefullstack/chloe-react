import React, { Component } from 'react';
import Header from '../Header/Header'
import Navbar from '../Navbar'
import Carousel from './Carousel'
import './detail.scss'

class Detail extends Component {
    
    render() {
        return <div>
            <Navbar></Navbar>
            <Header></Header>
            <Carousel></Carousel>
            <div>
                <h5>Temperament:</h5>
                <p style={{color: '#023d9e'}}>Affectionate, Sprightly, Tomboyish</p>
                <ul><strong>Details:</strong>
                    <li><strong>AKC Breed Popularity:</strong> Ranks 9 of 193</li>
                    <li><strong>Height:</strong> 7-8 inches</li>
                    <li><strong>Weight:</strong> 7 pounds</li>
                    <li><strong>Life Expectancy:</strong> 11-15 years</li>
                    <li><strong>Group:</strong> Toy Group</li>
                </ul>
            </div>
            <hr></hr>
            <div>
                <div>
                    <div className='category'> History</div>
                    <div className='paragraph-space'>
                        The Yorkshire Terrier (also called a "Yorkie") originated in Yorkshire, a county in northern England (and the adjoining Lancashire). In the mid-19th century, workers from Scotland came to Yorkshire in search of work and brought with them several different varieties of small terriers. Breeding of the Yorkshire Terrier was "principally accomplished by the people—mostly operatives in cotton and woollen mills—in the counties of Yorkshire and Lancashire." Details are scarce. Mrs A. Foster is quoted as saying in 1886, "If we consider that the mill operatives who originated the breed...were nearly all ignorant men, unaccustomed to imparting information for public use, we may see some reason why reliable facts have not been easily attained."
                    </div>
                    <div className='paragraph-space'>
                        The breed comes from three different dogs, a male named Old Crab, a female named Kitty, and another female whose name is not known. The Paisley Terrier, a smaller version of the Skye Terrier that was bred for a beautiful long silky coat, also figured into the early dogs. Some authorities believed that the Maltese was used as well. "They were all originally bred from Scotch Terriers (note: meaning dogs from Scotland, not today's Scottish Terrier) and shown as such...the name Yorkshire Terrier was given to them on account of their being improved so much in Yorkshire." Yorkshire Terriers were shown in a dog show category (class) at the time called "Rough and Broken-coated, Broken-haired Scotch and Yorkshire Terriers". Hugh Dalziel, writing in 1878, says that "the classification of these dogs at shows and in the Kennel Club Stud Book is confusing and absurd" in lumping together these different types.
                    </div>

                </div>
                <div className='category'> About the Yorkshire Terrier</div>
                <div className='paragraph-space'>
                    The Yorkshire Terrier is a compact, toy-size terrier of no more than seven pounds whose crowning glory is a floor-length, silky coat of steel blue and a rich golden tan.
                </div>
                <div className='paragraph-space'>
                    Don’t let the Yorkie’s daintiness fool you. Tenacious, feisty, brave, and sometimes bossy, the Yorkie exhibits all the traits of a true terrier. Often named the most popular dog breed in various American cities, Yorkies pack lots of big-town attitude into a small but self-important package. They are favorites of urbanites the world over.
                </div>
                <div className='paragraph-space'>
                    Yorkies are long-lived and hypoallergenic (the coat is more like human hair than animal fur), and they make fine little watchdogs. This is a true “personality breed,” providing years of laughs, love, and close companionship.
                </div>
            </div>
        
            <small>
                    Reference <br></br>
                    Yorkshire Terrier From AMERICAN KENNEL CLUB Retrieved from <a href='https://www.akc.org/dog-breeds/yorkshire-terrier/'>https://www.akc.org/dog-breeds/yorkshire-terrier/</a>
                </small>
        </div>
    }
}

export default Detail;