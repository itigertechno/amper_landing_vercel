interface ICheck {
    color: string
}

export const Check: React.FC<ICheck> = ({color}) => {
    return (
        <svg width="100%" height="100%" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid meet" focusable="false">
            <path fillRule="evenodd" clipRule="evenodd" d="M20.6011 5.39895C20.933 5.7309 20.933 6.26909 20.6011 6.60103L9.00002 18.2021L3.39898 12.601C3.06704 12.2691 3.06704 11.7309 3.39898 11.399C3.73093 11.067 4.26912 11.067 4.60107 11.399L9.00002 15.7979L19.399 5.39895C19.7309 5.06701 20.2691 5.06701 20.6011 5.39895Z" fill={color}></path>
        </svg>
    );
};

