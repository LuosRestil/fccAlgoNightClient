import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const GroupParticipants: React.FC = () => {
  const [groups, setGroups] = useState<IParticipant[][] | []>([]);

  useEffect(() => {
    getGroups();
  }, []);

  const getGroups = async (): Promise<void> => {
    const apiResponse = await fetch('http://localhost:5000/api/groups');
    const groups: IParticipant[][] = await apiResponse.json();
    setGroups(groups);
  }

  return (
    <div className="groups-container">
      {(groups as any[]).map((group: IParticipant[], index: number) => {
        return (
          <>
          <h3>Group {index + 1}</h3>
          <table className="table">
            <thead>
              <tr>
                <th>Name</th>
                <th>Level</th>
                <th>XP</th>
                <th>Lang1</th>
                <th>Lang2</th>
                <th>Lang3</th>
                <th>LangOther</th>
              </tr>
            </thead>
            <tbody>
              {group.map((participant: IParticipant) => {
                return (
                  <tr key={participant.id}>
                    <td>
                      {participant.name}
                    </td>
                    <td>
                      {participant.level}
                    </td>
                    <td>
                      {participant.xp}
                    </td>
                    <td>
                      {participant.lang1}
                    </td>
                    <td>
                      {participant.lang2}
                    </td>
                    <td>
                      {participant.lang3}
                    </td>
                    <td>
                      {participant.langOther}
                    </td>
                  </tr>
                )
              })}
            </tbody>
          </table>
          </>
        )
      })}
      <div className="button-container">
        <button onClick={getGroups} style={{marginRight: "1rem"}}>Re-group</button>
        <Link to="/admin">
          <button>View Participants</button>
        </Link>
      </div>
    </div>
  )
}

export default GroupParticipants;