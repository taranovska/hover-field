import React, { useEffect, useState } from "react";
import { Form, Spinner } from "react-bootstrap";
import axios from "axios";

export default function SelectField({
  setSelectedFieldSize,
  setIsLoading,
  isLoading,
}) {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const { data: response } = await axios(
          "http://demo7919674.mockable.io/"
        );
        setData(response);
      } catch (error) {
        console.log(error.message);
      }
      setIsLoading(false);
    };

    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      {isLoading && <Spinner animation="border" variant="primary" />}
      {!isLoading && (
        <Form.Select
          aria-label="Default select example"
          onChange={(e) => setSelectedFieldSize(e.target.value)}
        >
          <option>Pick Mode</option>
          {data.map((option, index) => {
            return (
              <option value={option.field} key={index}>
                {option.name}
              </option>
            );
          })}
        </Form.Select>
      )}
    </>
  );
}
