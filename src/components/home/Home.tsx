import React from 'react'
import styles from './home.module.css'

type Props = {}

export default function Home({ }: Props) {
    return (
        <div className={styles.home}>
            <nav>
                <div className="logo">
                    <img src="/images/logo/logo.svg" alt="soundwave logo" />
                    <h1>Soundwave</h1>
                </div>

                <ul>
                    <li>Discover</li>
                    <li>Join</li>
                </ul>
            </nav>
        </div>

    )
}