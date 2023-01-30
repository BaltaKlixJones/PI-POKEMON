import React from "react";
import "./Paginado.css";

const Paginado = ({ pokesPerPage, allPokemones, paginado, currentPage }) => {
  const pageNumber = [];

  for (let i = 0; i <= Math.ceil(allPokemones / pokesPerPage); i++) {
    pageNumber.push(i + 1);
  }

  const handlePrev = (currentPage) => {
    if (currentPage !== 1) paginado(currentPage - 1);
  };

  const handleNext = (currentPage) => {
    if (currentPage !== 7) paginado(currentPage + 1);
  };

  pageNumber.pop();

  return (
    <div className="pag_div_externo">
      <div className="paginado">
        {currentPage !== 1 ? (
          <button
            className="prevBtn"
            key="prev"
            onClick={() => handlePrev(currentPage)}
          >
            Prev{" "}
          </button>
        ) : (
          ""
        )}

        {pageNumber &&
          pageNumber.map((number) => {
            return (
              <div className="numbered-buttons" key={number}>
                <button
                  className={`${"number-button"} ${
                    currentPage === number ? "number-button-focus" : ""
                  }`}
                  onClick={() => paginado(number)}
                >
                  {number}
                </button>
              </div>
            );
          })}
        {currentPage !== Math.ceil(allPokemones / pokesPerPage) ? (
          <button
            className="nextBtn"
            key="next"
            onClick={() => handleNext(currentPage)}
          >
            Next{" "}
          </button>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export default Paginado;
