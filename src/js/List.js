import React, { Component } from 'react';
import Slide from 'react-reveal/Slide';
import '../App.css';
import MM from '../images/mastermargharita.jpeg';
import Witcher from '../images/witcher.jpg';
import AmericanGods from '../images/americangods.jpg';
import Footer from "./Footer";

class List extends Component {
    render(){
        return (
            <div className={'grid-container list-container'}>
                <div className={'row'}>
                    <div className={'col-1'}>
                    </div>
                    <div className={'col-10 list'}>
                        <Slide left>
                            <h1>The Master and Margarita</h1>
                        <p>The Master and Margarita (Russian: Ма́стер и Маргари́та) is a novel by Russian writer Mikhail Bulgakov, written in the Soviet Union between 1928 and 1940 during Stalin's regime. A censored version was published in Moscow magazine in 1966–1967, after the writer’s death. The manuscript was not published as a book until 1967, and then first in Paris. A samizdat version circulated that included parts cut out by official censors, and these were incorporated in a 1969 version published in Frankfurt. The novel has since been published in several languages and editions.</p>
                        <img src={MM} alt={'Master and Margharita cover'}/>
                        </Slide>
                        <Slide right>
                            <h1>The Witcher</h1>
                        <p>The Witcher (Polish: Wiedźmin), by Polish writer Andrzej Sapkowski, is a fantasy series of short stories and novels about the witcher Geralt of Rivia. In Sapkowski's books, "witchers" are monster hunters who (with training and body modification) develop supernatural abilities at a young age to battle deadly beasts. The books have been adapted into a film, a television series, video games, and a graphic novel series. The series of novels is known as the Witcher Saga. The short stories and novels have been translated into numerous languages, including English.</p>
                        <img src={Witcher} alt={'Witcher cover'}/>
                        </Slide>
                        <Slide left>
                            <h1>American Gods</h1>
                        <p>American Gods (2001) is a novel by English author Neil Gaiman. The novel is a blend of Americana, fantasy, and various strands of ancient and modern mythology, all centering on the mysterious and taciturn Shadow.
                            The book was published in 2001 by Headline in the United Kingdom and by William Morrow in the United States. It gained a positive critical response and won the Hugo and Nebula awards in 2002.</p>
                        <img src={AmericanGods} alt={'American Gods cover'}/>
                        </Slide>
                    </div>
                    <div className={'col-1'}>
                    </div>
                </div>
                <Footer/>
            </div>
        )
    }
}

export default List