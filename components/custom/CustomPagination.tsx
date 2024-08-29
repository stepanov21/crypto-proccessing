import React from "react";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "../ui/pagination";

const CustomPagination = ({ data, setPage }: { data: any; setPage: any }) => {
  return (
    <Pagination>
      <PaginationContent>
        <PaginationItem
          onClick={() => setPage((prev: any) => Math.max(prev - 1, 1))}
        >
          <PaginationPrevious href="#" />
        </PaginationItem>
        {data?.page - 1 > 0 && (
          <PaginationItem onClick={() => setPage(data?.page - 1)}>
            <PaginationLink href="#">{data?.page - 1}</PaginationLink>
          </PaginationItem>
        )}
        {data?.page <= data?.total_pages && (
          <PaginationItem onClick={() => setPage(data?.page)}>
            <PaginationLink className="bg-ourPurple" href="#">
              {data?.page}
            </PaginationLink>
          </PaginationItem>
        )}
        {data?.page + 1 <= data?.total_pages && (
          <PaginationItem onClick={() => setPage(data?.page + 1)}>
            <PaginationLink href="#">{data?.page + 1}</PaginationLink>
          </PaginationItem>
        )}
        <PaginationItem
          onClick={() =>
            setPage((prev: any) => Math.min(prev + 1, data?.total_pages))
          }
        >
          <PaginationNext href="#" />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );
};

export default CustomPagination;
