import React, { useCallback, useRef, useState } from "react";
import { usePoste } from "../../components/Posts/usePoste";
import Loader from "react-loader-spinner";

export const Posts = () => {
  const observer = useRef<IntersectionObserver | undefined>();
  const [pgNumber, setPgNumber] = useState(0);
  const { loading, properties, error, hasMore, lastPage } = usePoste(pgNumber);
  const lastPerson = useCallback(
    (node) => {
      if (loading) return;
      if (observer) observer.current?.disconnect();
      observer.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting && hasMore && pgNumber !== lastPage) {
          setPgNumber(pgNumber + 1);
          console.log("is there");
        }
      });
      if (node) observer.current.observe(node);
      console.log(node);
      return;
    },
    [loading, hasMore]
  );
  return (
    <div className="grid place-items-center gap-7 m-4">
      <div className="grid place-items-center gap-7 ">
        {properties?.data.map((persons, idx) => {
          return (
            <div key={idx} className="py-2 px-5 rounded-lg w-full bg-gray-300 ">
              {properties.data.length === idx + 1 ? (
                <div ref={lastPerson}>
                  <p>{persons.name}</p>
                  <p>{persons.trips}</p>
                </div>
              ) : (
                <>
                  <p>{persons.name}</p>
                  <p>{persons.trips}</p>
                </>
              )}
            </div>
          );
        })}
        <div>
          {loading && (
            <Loader
              type="Puff"
              color="rgba(209, 213, 219)"
              height={100}
              width={100}
              timeout={3000} //3 secs
            />
          )}
        </div>
        <div>{error && "Error"}</div>
      </div>
    </div>
  );
};
