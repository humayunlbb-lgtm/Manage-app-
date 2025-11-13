import { PrismaClient } from "@prisma/client";
import bcrypt from "bcrypt";

const prisma = new PrismaClient();

async function main() {
  // Create admin user with hashed password
  const adminPassword = await bcrypt.hash("Admin@1234", 10);
  const admin = await prisma.user.upsert({
    where: { email: "admin@college.edu" },
    update: {},
    create: {
      email: "admin@college.edu",
      password: adminPassword,
      name: "Admin User",
      role: "ADMIN",
    },
  });

  const studentPassword = await bcrypt.hash("Student@1234", 10);
  const studentUser = await prisma.user.upsert({
    where: { email: "student@college.edu" },
    update: {},
    create: {
      email: "student@college.edu",
      password: studentPassword,
      name: "Student User",
      role: "STUDENT",
    },
  });

  await prisma.student.upsert({
    where: { rollNumber: "S-2025-001" },
    update: {},
    create: {
      rollNumber: "S-2025-001",
      batch: "2025",
      userId: studentUser.id,
    },
  });

  console.log("Seeding complete.");
}
main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
