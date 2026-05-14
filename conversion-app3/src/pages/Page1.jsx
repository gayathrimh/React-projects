import { useState } from 'react';
import { conversions } from '../data';

export default function Page1() {

    const [value, setValue] = useState("");
    const [result, setResult] = useState("");
    const [current, setCurrent] = useState(0);

    const handleSubmit = () => {

        const answer =
          Number(value) *
          conversions[current].factor;

        setResult(answer);
    };

    return(
        <div>

            <h2>Unit Conversion</h2>

            <select
              onChange={(e) => setCurrent(e.target.value)}
            >

              {conversions.map((c, index) => (

                <option
                  key={index}
                  value={index}
                >
                  {c.name}
                </option>

              ))}

            </select>

            <br /><br />

            <input
              type="number"
              value={value}
              onChange={(e) => setValue(e.target.value)}
            />

            <button onClick={handleSubmit}>
              Submit
            </button>

            {result && (
              <p>
                {conversions[current].name}: {result}
              </p>
            )}

        </div>
    );
}