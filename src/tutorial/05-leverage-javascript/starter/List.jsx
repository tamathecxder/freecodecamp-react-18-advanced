import { Person } from "./Person";
import { peoples } from "../../../data";

const List = () => {
    return (
        <div>
            <h2>Leverage Javascript</h2>

            {peoples.map((person) => {
                return <Person key={person.name} {...person} />;
            })}
        </div>
    );
};

export default List;
