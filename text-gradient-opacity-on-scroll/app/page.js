import Paragraph from './components/Paragraph';
import Word from './components/Word';
import Character from './components/Character';
import styles from './page.module.css'

const paragraph = "Hey, I'm Matteo, and I'm a tech-savvy entrepreneur passionate about innovation a" +
        "nd positive change. Ready to contribute expertise to cutting-edge projects, alwa" +
        "ys seeking new challenges."
export default function Home() {
    return (
        <main>
            <div style={{
                height: "100vh"
            }}>
                <h3 className={styles.titles}>Scroll for paragraph animation
                </h3>
            </div>
            <Paragraph value={paragraph}/>
            <div style={{
                height: "50vh"
            }}></div>
            <h3 className={styles.titles}>Scroll for word by word animation
            </h3>

            <div style={{
                height: "100vh"
            }}></div>
            <Word paragraph={paragraph}/>
            <div style={{
                height: "50vh"
            }}></div>
            <h3 className={styles.titles}>Scroll for char by char animation
            </h3>

            <div style={{
                height: "100vh"
            }}></div>
            <Character paragraph={paragraph}/>
            <div style={{
                height: "50vh"
            }}></div>
        </main>
    )
}