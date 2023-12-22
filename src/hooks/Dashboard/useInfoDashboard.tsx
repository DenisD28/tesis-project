import React, { useEffect } from 'react'
import { getInfoDashboard } from '../../services/Dashboard/getInfoDashboard';

interface DashboardSuperAdminProps {
  disk: {
    unit: string;
    totalSpace: number;
    freeSpace: number;
    usedSpace: number;
  };
  countUsers: number;
  lastLogin: {
    name: string;
    last_login_at: string;
    tiempo_pasado: string;
  }[];
}

export default function useInfoDashboard() {
  const [disk, setDisk] = React.useState<DashboardSuperAdminProps["disk"]>({ unit: "", totalSpace: 0, freeSpace: 0, usedSpace: 0 });
  const [countUsers, setCountUsers] = React.useState<DashboardSuperAdminProps["countUsers"]>(0);
  const [lastLogin, setLastLogin] = React.useState<DashboardSuperAdminProps["lastLogin"]>([]);
  const fnGetInfoDashboard = async () => {
    const { disk, countUser, lastLogin } = await getInfoDashboard();
    setDisk(disk);
    setCountUsers(countUser);
    setLastLogin(lastLogin);
  }
  useEffect(() => {
    fnGetInfoDashboard();
  }, [])
  return {
    disk,
    countUsers,
    lastLogin
  }
}
