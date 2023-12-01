export default function InstagramLink(props){
    return <a className={props.classes || ''} href="#instagram" onClick={() => {window.newrelic.addPageAction('instagram-click', {}); setTimeout(() => window.location.href="https://instagram.com/frosted.by.nes", 100)}}>{props.children || 'Instagram'}</a>
}