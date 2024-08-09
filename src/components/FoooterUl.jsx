import FooterLi from "./FooterLi";

const FooterUl = ({item}) => {
    return <>
        <div className="text-center sm:text-left">
            <p className="text-lg font-medium">{item.heading}</p>

            <ul className="mt-8 space-y-4 text-sm">
               {item.list.map(item=> <FooterLi item={item}></FooterLi>)}
            </ul>
        </div>
    </>
}

export default FooterUl;