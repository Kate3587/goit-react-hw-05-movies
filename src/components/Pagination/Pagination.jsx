import PropTypes from 'prop-types';
import {
  PaginationWrapp, PaginationList, PaginationListItem,
  PaginationBtn, Active
} from './Pagination.styled';


export const Pagination = ({ totalPages, paginationFunc, page }) => {
  const currentPage = +page;
  return (
    <PaginationWrapp>
      <PaginationList>
        {[...Array(totalPages)].map((_, number) => {
          const nextPage = number + 1;
          return (
            <PaginationListItem>
              <PaginationBtn
                className={currentPage !== nextPage ? <PaginationListItem/> : <Active/>}
                onClick={() => paginationFunc({ number: nextPage })}
                type="button"
              >
                {nextPage}
              </PaginationBtn>
            </PaginationListItem>
          );
        })}
      </PaginationList>
    </PaginationWrapp>
  );
};

Pagination.propTypes = {
  totalPages: PropTypes.number,
  paginationFunc: PropTypes.func,
  page: PropTypes.string,
};