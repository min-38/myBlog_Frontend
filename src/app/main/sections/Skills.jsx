"use client";

import { API_BASE_URL } from "@/utils/config.mjs"
import { useEffect, useState } from "react";
import ProgressBar from "@/components/charts/ProgressChart";

export default function Skills() {

    const [skills, setSkills] = useState([]);

    useEffect(() => {
        async function fetchSkills() {
            try {
                const res = await fetch(`${API_BASE_URL}/resume/skills`);
                const data = await res.json();
                setSkills(data || []);
            } catch (error) {
                console.error("Error fetching skills:", error);
            }
        }
    
        fetchSkills();
    }, []);

    async function getSkillIcon(_name) {
        const fullPath = path.join(process.cwd(), "public", filePath);
        try {
            await fs.access(fullPath);
            return true;
        } catch (error) {
            return false;
        }
        return name;
    }

    return (
        <section className="bg-white p-6 ">
            <h2 className="text-xl font-bold">My Skills</h2>
            
            <div className="flex justify-between p-1">
                <div className="w-full md:w-1/3 bg-white p-4">
                    <h2 className="text-center text-lg font-bold mb-2">LANGUAGE</h2>
                    <table className="w-full border-collapse border border-gray-300">
                        <thead>
                            <tr className="bg-gray-200">
                                <th className="border border-gray-300 px-4 py-2">NAME</th>
                                <th className="border border-gray-300 px-4 py-2">LEVEL</th>
                            </tr>
                        </thead>
                        <tbody>
                            {(() => {
                                const lgSkills = skills.filter((skill) => skill.type === 0);

                                return lgSkills.length === 0 ? (
                                    <tr>
                                        <td colSpan="2" className="text-center py-4 text-gray-500">
                                            Empty...
                                        </td>
                                    </tr>
                                ) : (
                                    lgSkills.map((skill, index) => (
                                        <tr key={index}>
                                            <td className="border border-gray-300 px-4 py-2">
                                                {skill.name}
                                            </td>
                                            <td className="border border-gray-300 px-4 py-1">
                                                <div className="w-full h-10">
                                                    <ProgressBar value={skill.level} />
                                                </div>
                                            </td>
                                        </tr>
                                    ))
                                )
                            })()}
                        </tbody>
                    </table>
                </div>

                <div className="w-full md:w-1/3 bg-white p-4">
                    <h2 className="text-center text-lg font-bold mb-2">FRAMEWORK</h2>
                    <table className="w-full border-collapse border border-gray-300">
                        <thead>
                            <tr className="bg-gray-200">
                                <th className="border border-gray-300 px-4 py-2">NAME</th>
                                <th className="border border-gray-300 px-4 py-2">LEVEL</th>
                            </tr>
                        </thead>
                        <tbody>
                            {(() => {
                                const fwSkills = skills.filter((skill) => skill.type === 1);

                                return fwSkills.length === 0 ? (
                                    <tr>
                                        <td colSpan="2" className="text-center py-4 text-gray-500">
                                            Empty...
                                        </td>
                                    </tr>
                                ) : (
                                    fwSkills.map((skill, index) => (
                                        <tr key={index}>
                                            <td className="border border-gray-300 px-4 py-2">
                                                {skill.name}
                                            </td>
                                            <td className="border border-gray-300 px-4 py-1">
                                                <div className="w-full h-10">
                                                    <ProgressBar value={skill.level} />
                                                </div>
                                            </td>
                                        </tr>
                                    ))
                                )
                            })()}
                        </tbody>
                    </table>
                </div>

                <div className="w-full md:w-1/3 bg-white p-4">
                    <h2 className="text-center text-lg font-bold mb-2">CS</h2>
                    <table className="w-full border-collapse border border-gray-300">
                        <thead>
                            <tr className="bg-gray-200">
                                <th className="border border-gray-300 px-4 py-2">NAME</th>
                                <th className="border border-gray-300 px-4 py-2">LEVEL</th>
                            </tr>
                        </thead>
                        <tbody>
                            {(() => {
                                const CsSkills = skills.filter((skill) => skill.type === 2);

                                return CsSkills.length === 0 ? (
                                    <tr>
                                        <td colSpan="2" className="text-center py-4 text-gray-500">
                                            Empty...
                                        </td>
                                    </tr>
                                ) : (
                                    CsSkills.map((skill, index) => (
                                        <tr key={index}>
                                            <td className="border border-gray-300 px-4 py-2">
                                                {skill.name}
                                            </td>
                                            <td className="border border-gray-300 px-4 py-1">
                                                <div className="w-full h-10">
                                                    <ProgressBar value={skill.level} />
                                                </div>
                                            </td>
                                        </tr>
                                    ))
                                )
                                
                            })()}
                        </tbody>
                    </table>
                </div>
            </div>
        </section>
    );
}