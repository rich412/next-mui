import {
  Button,
  Chip,
  Container,
  MenuItem,
  Select,
  Stack,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  TextField,
  Typography,
} from "@mui/material";
import type { NextPage } from "next";
import { SxProps } from "@mui/material/styles";

const data = [
  {
    name: "상품명1",
    price: "2,000 원",
    category: "기본",
    option: "-",
    tag: "품절",
  },
  {
    name: "상품명2",
    price: "16,000 원",
    category: "세트메뉴",
    option: "-",
    tag: "",
  },
  {
    name: "상품명3",
    price: "9,500 원",
    category: "특별행사품",
    option: "-",
    tag: "미사용",
  },
  {
    name: "상품명4",
    price: "11,000 원",
    category: "기본",
    option: "-",
    tag: "",
  },
  {
    name: "상품명5",
    price: "7,500 원",
    category: "기본",
    option: "-",
    tag: "",
  },
  {
    name: "상품명6",
    price: "4,300 원",
    category: "특별행사품",
    option: "-",
    tag: "미사용",
  },
  {
    name: "상품명7",
    price: "7,000 원",
    category: "기본",
    option: "-",
    tag: "",
  },
  {
    name: "상품명8",
    price: "18,000 원",
    category: "기본",
    option: "-",
    tag: "품절",
  },
  {
    name: "상품명9",
    price: "33,000 원",
    category: "세트메뉴",
    option: "-",
    tag: "",
  },
  {
    name: "상품명10",
    price: "20,000 원",
    category: "기본",
    option: "-",
    tag: "",
  },
];

const Home: NextPage = () => {
  return (
    <Container maxWidth="md" sx={{ paddingTop: "50px" }}>
      <Typography variant="h4" component="div">
        MUI sample
      </Typography>
      <Stack spacing={{ xs: 1, sm: 0 }} sx={inputWrapperSx}>
        <Stack direction={{ xs: "column", sm: "row" }} spacing={1}>
          <Select
            size="small"
            value={10}
            sx={{ width: { xs: "100%", sm: "100px" } }}
            // onChange={handleChange}
          >
            <MenuItem value={10}>Ten</MenuItem>
            <MenuItem value={20}>Twenty</MenuItem>
            <MenuItem value={30}>Thirty</MenuItem>
          </Select>
          <Stack direction="row" spacing={1}>
            <TextField
              size="small"
              placeholder="카테고리 상품명"
              variant="outlined"
              sx={{ width: { xs: "100%", sm: "auto" } }}
            />
            <Button variant="outlined">검색</Button>
          </Stack>
        </Stack>
        <Button sx={{ width: { xs: "100%", sm: "auto" } }} variant="contained">
          등록하기
        </Button>
      </Stack>
      <Stack spacing={1} sx={{ overflow: "auto" }}>
        <Table size="small" sx={{ minWidth: 800 }}>
          <TableHead>
            <TableRow>
              <TableCell style={{ width: "50px" }}></TableCell>
              <TableCell>상품명</TableCell>
              <TableCell align="right">가격</TableCell>
              <TableCell align="right">카테고리</TableCell>
              <TableCell align="center" style={{ width: "70px" }}>
                옵션
              </TableCell>
              <TableCell align="right" style={{ width: "100px" }}></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <TableCell />
              <TableCell>
                <TextField
                  size="small"
                  placeholder="상품명"
                  variant="outlined"
                />
              </TableCell>
              <TableCell align="right">
                <TextField
                  size="small"
                  placeholder="상품명"
                  variant="outlined"
                />
              </TableCell>
              <TableCell>
                <Select
                  size="small"
                  value={10}
                  sx={{ width: "150px" }}
                  // onChange={handleChange}
                >
                  <MenuItem value={10}>Ten</MenuItem>
                  <MenuItem value={20}>Twenty</MenuItem>
                  <MenuItem value={30}>Thirty</MenuItem>
                </Select>
              </TableCell>
              <TableCell align="center">
                <Button
                  size="small"
                  sx={{
                    minWidth: 0,
                    width: "30px",
                  }}
                  variant="outlined"
                >
                  +
                </Button>
              </TableCell>
              <TableCell align="right">
                <Button size="small" variant="outlined">
                  간편등록
                </Button>
              </TableCell>
            </TableRow>
            {data.map((list) => (
              <TableRow key={list.name}>
                <TableCell
                  component="th"
                  scope="row"
                  align="center"
                  style={{ width: "50px" }}
                >
                  {list.tag && (
                    <Chip
                      label={list.tag}
                      color={list.tag === "품절" ? "primary" : "default"}
                      size="small"
                      sx={{ borderRadius: "4px" }}
                    />
                  )}
                </TableCell>
                <TableCell scope="row">{list.name}</TableCell>
                <TableCell align="right" scope="row">
                  {list.price}
                </TableCell>
                <TableCell align="right" scope="row">
                  {list.category}
                </TableCell>
                <TableCell align="center" scope="row">
                  {list.option}
                </TableCell>
                <TableCell align="right" scope="row">
                  <Button size="small" color="secondary" variant="outlined">
                    상세설정
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Stack>
    </Container>
  );
};

const inputWrapperSx: SxProps = {
  display: "flex",
  justifyContent: { xs: "flex-start", sm: "space-between" },
  flexDirection: { xs: "column", sm: "row" },
};

export default Home;
