import React from 'react';

const Pagination = (props) => {
    const nextUrl = "http://localhost:8000/api/contacts/";
    return (
        <nav aria-label="Page navigation example">
            <ul className="pagination">
                <li className={"page-item" + (props.pagination.previous == null ? " disabled" : "")}>
                    <button className="page-link"
                            onClick={(e) => props.getPage(e, nextUrl + "?page=" + props.pagination.previous)}>Previous
                    </button>
                </li>
                {props.pagination.previous != null ? (
                    < li className="page-item">
                        <button className="page-link"
                                onClick={(e) => props.getPage(e, nextUrl + "?page=" + props.pagination.previous)}>{props.pagination.previous}</button>
                    </li>
                ) : (
                    ""
                )
                }
                <li className="page-item active">
                    <button className="page-link"
                            onClick={(e) => props.getPage(e, nextUrl + "?page=" + props.pagination.current_page)}>{props.pagination.current_page}</button>
                </li>

                {props.pagination.next != null ? (
                    < li className="page-item">
                        <button className="page-link"
                                onClick={(e) => props.getPage(e, nextUrl + "?page=" + props.pagination.next)}>{props.pagination.next}</button>
                    </li>
                ) : (
                    ""
                )
                }

                <li className={"page-item" + (props.pagination.next == null ? " disabled" : "")}>
                    <button className="page-link"
                            onClick={(e) => props.getPage(e, nextUrl + "?page=" + props.pagination.next)}>Next
                    </button>
                </li>
            </ul>
        </nav>
    );
}

export default Pagination;