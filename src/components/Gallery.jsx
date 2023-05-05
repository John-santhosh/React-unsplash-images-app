import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useGlobalContext } from "../context";
const url = `https://api.unsplash.com/search/photos?client_id=${
  import.meta.env.VITE_API_KEY
}&page=1`;

const Gallery = () => {
  const { search } = useGlobalContext();
  const response = useQuery({
    queryKey: ["images", search],
    queryFn: async () => {
      const result = await axios.get(`${url}&query=${search}`);
      return result.data;
    },
  });
  if (response.isLoading) {
    return (
      <section className="image-container">
        <div className="loading"></div>
      </section>
    );
  }
  if (response.isError) {
    return (
      <section className="image-container">
        <div className="">There was an error...</div>{" "}
      </section>
    );
  }
  const results = response.data.results;
  // console.log(results);
  if (results.length < 1) {
    return (
      <section className="image-container">
        <div className="">There was an error...</div>{" "}
      </section>
    );
  }
  return (
    <section className="image-container">
      {results.map((item) => {
        const url = item?.urls?.regular;
        return (
          <img
            key={item.id}
            src={url}
            alt={item.alt_description}
            className="img"
          />
        );
      })}
    </section>
  );
};

export default Gallery;
