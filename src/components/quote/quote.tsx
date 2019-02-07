import React, { FunctionComponent } from 'react';
import s from './quote.module.css';

interface Props {
	quote: string;
	author: string;
}

const Quote: FunctionComponent<Props> = props => (
	<blockquote className={s.quote}>
		<q>{props.quote}</q> — {props.author}
	</blockquote>
);

export default Quote;
