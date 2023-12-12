interface IListCardProps {
    classProp: string;
    title: string;
    list: string[];   
}


function ListCard({classProp, title, list} : IListCardProps): React.JSX.Element{

    const listItems = list.map((item, index) => <li key={item+'-'+index}>{item}</li>)

    return (
        <div className={classProp}>
            <h4>
                {title}
            </h4>
            <ul>
                {listItems}
            </ul>
        </div>
    );
};

export default ListCard;