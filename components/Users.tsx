import useSWR from "swr";
import { fetcher } from "../lib/fetcher";
export function Users() {
  const { data } = useSWR("/api/users", fetcher);

  return (
    <ul>
      {data?.users?.map((user: any) => (
        <li key={user.id}>{user.name}</li>
      ))}
    </ul>
  );
}
