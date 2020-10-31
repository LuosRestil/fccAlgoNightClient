import React, { useState, useEffect } from "react";

const ViewParticipants: React.FC = () => {
  const [participants, setParticipants] = useState<IParticipant[] | []>([]);

  useEffect(() => {
    getParticipants().then(participants => setParticipants(participants));
  }, []);

  const getParticipants = async (): Promise<IParticipant[]> => {
    const apiResponse = await fetch('http://localhost:5000/api/participants');
    const participants: IParticipant[] = await apiResponse.json();
    return participants;
  }

  return (
    <div className="table-container">
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
          {(participants as any[]).map((participant: IParticipant) => {
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
    </div>
  )
}

export default ViewParticipants;