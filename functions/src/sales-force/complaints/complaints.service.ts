import { Complaint, ComplaintStatus } from "./complaints.model";
import { complaintsMock } from "./complaints.service-data";
import { Request, Response } from "express";


export function getComplaints(adherentId: string, start: number = 1, end: number = 3): Promise<Complaint[]> {
  return Promise.resolve(complaintsMock.slice(start - 1, end));
}

export function getComplaintDetail(complaintId: string): Promise<Complaint> {
  let foundComplaint: Complaint;
  for (const complaint of complaintsMock) {
    if (complaint.id === complaintId) {
      foundComplaint = complaint;
    }
  }
  return Promise.resolve(foundComplaint);
}



export function addComplaintToDB(req:Request):Promise<Complaint>{
  let complaint:Complaint={folderId:req.body.folderId,
    id:"",status:ComplaintStatus.SENT,declarationDate:new Date(),
    reason:req.body.reason,description:req.body.description};
  let length=complaintsMock.length;
  let id=122222+length;
  complaint.id=id+"";
  complaintsMock.push(complaint);
  return Promise.resolve(complaint);
}

