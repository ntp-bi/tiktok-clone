import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import SuggestedAccountsItem from "../suggested-accounts-item/SuggestedAccountsItem";

import suggest from "./../../api/suggest";
import "./suggested-accounts.scss";

const SuggestedAccounts = (props) => {
    const [suggests, setSuggests] = useState([]);
    const [seeAll, setSeeAll] = useState(false);

    useEffect(() => {
        const fetchApi = async () => {
            try {
                const result = seeAll
                    ? await suggest(1, 16)
                    : await suggest(1, 5);
                setSuggests(result);
            } catch (error) {
                console.log("Error fetching suggestions:", error);
            }
        };

        fetchApi();
    }, [seeAll]);

    return (
        <div className="suggested-accounts">
            <p className="suggested-accounts__title">{props.title}</p>
            {suggests.map((item) => (
                <SuggestedAccountsItem key={item.id} data={item} />
            ))}
            <p
                className="suggested-accounts__btn-more"
                onClick={() => setSeeAll(!seeAll)}
            >
                {`${!seeAll ? "See more" : "See less"}`}
            </p>
        </div>
    );
};

SuggestedAccounts.propTypes = {
    title: PropTypes.string.isRequired,
};

export default SuggestedAccounts;
