
import React from 'react';
import PropTypes from 'prop-types';
import TimeAgo from 'react-timeago'
import { emojify } from 'node-emoji';

import gql from 'graphql-tag';
import { propType } from 'graphql-anywhere';

import InfoLable from './InfoLabel';

const RepoInfo = ({
    entry: {
        createAt,
        repository: { description, stargazers_count, open_issues_count },
        postdBy: {html_url, login}
    },
    children,
}) => (<div>
    <p>{ description && emojify(description) }</p>
    <p>
        <InfoLable label="Stars" value={stargazers_count} />
        <InfoLable label="Issues" value={open_issues_count} />
        {children}
        &nbsp;&nbsp;&nbsp; Submitted&nbsp;
        <TimeAgo date={createAt} />
        &nbsp;by&nbsp;
        <a href={html_url}>{login}</a>
    </p>
</div>);

RepoInfo.fragments = {
    entry: gql`
        fragment RepoInfo on Entry {
            createAt
            repository {
                description
                stargazers_count
                open_issues_count
            }
            postdBy {
                html_url
                login
            }
        }
    `,
};

RepoInfo.propTypes = {
    entry: propType(RepoInfo.fragments.entry).isRequired,
    children: PropTypes.node,
  };

export default RepoInfo;