import React from 'react';

export default function Button(props) {
    return(
        <div>
            <button href={props.link} type="button" class="btn btn-primary btn-lg btn__w">{props.text}</button>
        </div>
    )
}