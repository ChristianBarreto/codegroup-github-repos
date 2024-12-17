import Table from 'react-bootstrap/Table';
import { Repos } from '../../../api/types';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router-dom';

export default function RepoTable({
  repos
}: {
  repos: Repos | undefined
}) {
  const [sortDirection, setSortDirection] = useState(1);
  // Note: here I implemented the sort of table using front end but it can also be implemented on back end using query parameters.

  const navigate = useNavigate();

  return (
    <Table bordered hover>
      <thead>
        <tr>
          <th>#</th>
          <th>Repo</th>
          <th style={{cursor: 'pointer'}} onClick={() => setSortDirection(sortDirection * -1)}>Stars (click to sort)</th>
          <th>Url</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {repos?.sort((a, b) => {
          if (a.stargazers_count > b.stargazers_count) {
            return -1 * sortDirection;
          } else {
            return 1 * sortDirection;
          }
        }).map((repo, index) => (
          <tr key={repo.id}>
            <td>{index + 1}</td>
            <td>{repo.name}</td>
            <td>{repo.stargazers_count}</td>
            <td><a href={repo.html_url} target="_blank" rel="noreferrer">(click to go to repo)</a></td>
            <td><Button onClick={() => navigate(`/repos/${repo.full_name.replace("/", "*")}`)}>See details</Button></td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
}