<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="Main.aspx.cs" Inherits="WebTraining.Main" %>

<!DOCTYPE html>
<html xmlns="http://www.w3.org/1999/xhtml">
	<head runat="server">
		<title>Workrecord</title>

		<!-- import js, css (dev)-->
		<script src="http://localhost:8080/bundle.js"></script>
		<link rel="stylesheet" type="text/css" href="http://localhost:8080/bundle.css">
	</head>
	<body>
		<div id="MainVueView">
			<h1>加工程式篩選器</h1>

			<!-- date selector -->
			<div class="selector">
				<label>開始日期</label>
				<input type="date" v-model="startDate" />

				<label>結束日期</label>
				<input type="date" v-model="endDate" />

				<a href="javascript:;" class="button" v-on:click="fnSelectDate">篩選</a>
			</div>

			<!-- table show -->
			<table class="tbWrokrecord">
				<tr bgcolor='#22B14C' style="color:#eeeeee; font-weight:900">
					<td>開始時間</td>
					<td>機台名稱</td>
					<td>總加工件數</td>
					<td>加工名稱</td>
					<td>總加工時間</td>
				</tr>
				<tr v-if="typeof workrecrodArray != 'object'">
					<td colspan="5">無資料</td>
				</tr>
				<tr v-if="typeof workrecrodArray == 'object'" v-for='(item, index) in workrecrodArray'>
					<td>{{item.Col_DateTime}}</td>
					<td>{{item.Col_MachineName}}</td>
					<td>{{item.Col_PartCount}}</td>
					<td>{{item.Col_ProgName}}</td>
					<td>{{item.Col_TotalTime}}</td>
				</tr>
			</table>
		</div>
	</body>
</html>