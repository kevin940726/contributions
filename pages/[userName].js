import Router from 'next/router';
import querystring from 'query-string';
import fetch from 'isomorphic-unfetch';

const User = () => null;

User.getInitialProps = async ({ query, res }) => {
  const { userName } = query;

  const orgs = await fetch(
    `https://api.github.com/users/${userName}/orgs`
  ).then(res => res.json());
  const filterOrgs = orgs.map(org => `-user:${org.login}`).join(' ');

  const url = `https://github.com/search?${querystring.stringify({
    utf8: '✓',
    q: `is:pr is:closed author:${userName} -user:${userName} sort:updated-desc ${filterOrgs}`,
  })}`;

  if (res) {
    res.writeHead(302, {
      Location: url,
    });
    res.end();
  } else {
    Router.push(url);
  }

  return {};
};

export default User;
