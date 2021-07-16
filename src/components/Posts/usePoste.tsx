import React, { useEffect, useState } from "react";
import axios from "axios";
import { Person } from "../../apiTypes/Person/personApiTypes";

export const usePoste = (pgNumber: number) => {
  const [properties, setProperties] = useState<
    | Person
    | {
        data: [];
      }
  >({ data: [] });
  const [error, setError] = useState(false);
  const [hasMore, setHasMore] = useState(false);
  const [loading, setLoading] = useState(false);
  const [lastPage, setLastPage] = useState(0);
  useEffect(() => {
    setLoading(true);
    axios
      .get(
        `https://api.instantwebtools.net/v1/passenger?page=${pgNumber}&size=10`
      )
      .then((res) => {
        console.log(res);
        setLastPage(res.data.totalPages)
        setProperties({
          totalPassengers: res.data.totalPassengers,
          totalPages: res.data.totalPages,
          data: [...properties?.data, ...res.data.data],
        });
        setHasMore(res.data.data.length > 0);
        setLoading(false);
        return res;
      })
      .catch((err) => {
        setError(true);
      });
  }, [pgNumber]);

  return {
    properties,
    error,
    hasMore,
    loading,
    lastPage,
  };
};
